require('dotenv').config();
const express = require("express");
const path = require("path");
const compression = require("compression");
const fs = require("fs");
const nodemailer = require("nodemailer");
const axios = require("axios");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const winston = require("winston");

// Logger setup
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level}]: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'server.log' })
  ]
});

// Middleware Setup
const app = express();
const port = process.env.PORT || 3000;

// Middleware to redirect HTTP to HTTPS
app.use((req, res, next) => {
  if (req.get('X-Forwarded-Proto') !== 'https') {
    res.redirect(301, `https://${req.headers.host}${req.url}`);
  } else {
    next();
  }
});

// Enable compression for all responses
app.use(compression());

// Trust proxy for Express rate-limiting
app.set('trust proxy', 'loopback');

// Content-Type middleware
app.use((req, res, next) => {
  if (req.url.endsWith('.js')) {
    res.setHeader('Content-Type', 'application/javascript; charset=UTF-8');
  } else if (req.url.endsWith('.css')) {
    res.setHeader('Content-Type', 'text/css; charset=UTF-8');
  }
  next();
});

// Serve compressed files if available
const serveCompressedFiles = (fileType) => {
  return (req, res, next) => {
    const brotliPath = path.join(__dirname, `../frontend/dist${req.url}.br`);
    const gzipPath = path.join(__dirname, `../frontend/dist${req.url}.gz`);

    if (fs.existsSync(brotliPath)) {
      req.url += '.br';
      res.set('Content-Encoding', 'br');
    } else if (fs.existsSync(gzipPath)) {
      req.url += '.gz';
      res.set('Content-Encoding', 'gzip');
    }
    next();
  };
};

app.get('*.js', serveCompressedFiles('js'));
app.get('*.css', serveCompressedFiles('css'));

// Serve static files from the Vue build
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Fallback to index.html for client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add Helmet middleware for security (CSP)
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "https://maps.googleapis.com", "https://maps.gstatic.com", "static.hotjar.com", "maps.googleapis.com"],
      frameAncestors: ["'self'", "https://www.google.com"],
      imgSrc: ["'self'", "https://maps.gstatic.com", "https://*.googleusercontent.com"],
      styleSrc: ["'self'", "https://fonts.googleapis.com"],
    },
  },
}));

// Rate Limiting for the contact form
const contactFormLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: "Too many requests from this IP, please try again after 15 minutes",
});

// Spam keywords and blacklisted domains
const spamKeywords = ["viagra", "loan", "free", "win", "credit"];
const blacklistedDomains = ["spamdomain.com", "disposablemail.com", "mailinator.com"];

// Nodemailer transporter (with connection pooling)
const transporter = nodemailer.createTransport({
  host: "mail.topspeedservice.ro",
  port: 587,
  secure: false, 
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  pool: true, // Enable connection pooling
  maxConnections: 5, // Max connections pool
  maxMessages: 10 // Max messages per connection
});

// Route for the contact form
app.post('/api/contact', contactFormLimiter, async (req, res) => {
  const { nume, prenume, email, numar_de_telefon_optional, mesaj, honeypot, recaptchaToken } = req.body;

  // Honeypot check
  if (honeypot) {
    logger.warn('Spam detected via honeypot field');
    return res.status(400).json({ error: 'Spam detected' });
  }

  // Validate required fields
  if (!nume || !prenume || !email || !mesaj) {
    return res.status(400).json({ error: 'Please fill in all required fields.' });
  }

  // Email domain blacklist check
  const emailDomain = email.split("@")[1].toLowerCase();
  if (blacklistedDomains.includes(emailDomain)) {
    logger.warn("Spam detected via email domain blacklist");
    return res.status(400).json({ error: "Spam detected" });
  }

  // Keyword filtering
  const messageContent = `${nume} ${prenume} ${email} ${mesaj}`.toLowerCase();
  const containsSpamKeyword = spamKeywords.some((keyword) => messageContent.includes(keyword));

  if (containsSpamKeyword) {
    logger.warn("Spam detected via keyword filtering");
    return res.status(400).json({ error: "Spam detected" });
  }

  // Verify reCAPTCHA
  try {
    const recaptchaResponse = await axios.post(`https://www.google.com/recaptcha/api/siteverify`, null, {
      params: { secret: process.env.RECAPTCHA_SECRET_KEY, response: recaptchaToken }
    });

    if (!recaptchaResponse.data.success) {
      return res.status(400).json({ error: "reCAPTCHA verification failed", details: recaptchaResponse.data['error-codes'] });
    }
  } catch (err) {
    logger.error("reCAPTCHA verification error:", err);
    return res.status(500).json({ error: "Internal server error during reCAPTCHA verification" });
  }

  // Send the email
  try {
    const mailOptions = {
      from: `"${nume} ${prenume}" <${email}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: "New Contact Form Submission",
      text: `You have a new contact form submission from ${nume} ${prenume}. Message: ${mesaj}`,
      html: `<p><strong>Message:</strong> ${mesaj}</p>`,
    };

    await transporter.sendMail(mailOptions);
    logger.info("Message sent successfully.");
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    logger.error("Error sending email:", error);
    res.status(500).json({ error: `Error sending email: ${error.message}` });
  }
});

// Start the server
app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});
