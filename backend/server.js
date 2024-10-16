require('dotenv').config();
const express = require("express");
const path = require("path");
const compression = require("compression");
const fs = require("fs");
const nodemailer = require("nodemailer");
const axios = require("axios");
const helmet = require("helmet");

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

// Enable Gzip and Brotli compression
app.use(compression());

// Enable trust proxy
app.set('trust proxy', 'loopback');

// Serve Brotli or Gzip compressed files if they exist
app.get('*.js', (req, res, next) => {
  const brotliPath = path.join(__dirname, '../frontend/dist', req.url + '.br');
  const gzipPath = path.join(__dirname, '../frontend/dist', req.url + '.gz');

  if (fs.existsSync(brotliPath)) {
    req.url = req.url + '.br';
    res.set('Content-Encoding', 'br');
  } else if (fs.existsSync(gzipPath)) {
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
  }
  next();
});

app.get('*.css', (req, res, next) => {
  const brotliPath = path.join(__dirname, '../frontend/dist', req.url + '.br');
  const gzipPath = path.join(__dirname, '../frontend/dist', req.url + '.gz');

  if (fs.existsSync(brotliPath)) {
    req.url = req.url + '.br';
    res.set('Content-Encoding', 'br');
  } else if (fs.existsSync(gzipPath)) {
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
  }
  next();
});

// Serve the Vue 3 build files
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Route all other requests to index.html (for client-side routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add Helmet middleware with CSP
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "https://maps.googleapis.com", "https://maps.gstatic.com", "static.hotjar.com"],
      frameAncestors: ["'self'", "https://www.google.com"],
      imgSrc: ["'self'", "https://maps.gstatic.com", "https://*.googleusercontent.com"],
      styleSrc: ["'self'", "https://fonts.googleapis.com"],
    },
  },
}));

// Spam protection
const spamKeywords = [
  "viagra", "loan", "free", "win", "credit", "pariuri", "superbet", "castiga"
];
const blacklistedDomains = [
  "spamdomain.com", "disposablemail.com", "mailinator.com"
];

// Route for the contact form
app.post('/api/contact', async (req, res) => {
  const { nume, prenume, email, numar_de_telefon_optional, mesaj, honeypot, recaptchaToken } = req.body;

  // Honeypot field check
  if (honeypot) {
    return res.status(400).json({ error: 'Spam detected' });
  }

  // Validate the input before proceeding
  if (!nume || !prenume || !email || !mesaj) {
    return res.status(400).json({ error: 'Please fill in all required fields.' });
  }

  // Email domain blacklist check
  const emailDomain = email.split("@")[1].toLowerCase();
  if (blacklistedDomains.includes(emailDomain)) {
    return res.status(400).json({ error: "Spam detected" });
  }

  // Keyword filtering
  const messageContent = `${nume} ${prenume} ${email} ${mesaj}`.toLowerCase();
  const containsSpamKeyword = spamKeywords.some((keyword) =>
    messageContent.includes(keyword)
  );
  if (containsSpamKeyword) {
    return res.status(400).json({ error: "Spam detected" });
  }

  // Verify reCAPTCHA
  try {
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    const recaptchaResponse = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      null,
      {
        params: {
          secret: recaptchaSecret,
          response: recaptchaToken,
        },
      }
    );

    if (!recaptchaResponse.data.success) {
      return res.status(400).json({ error: "reCAPTCHA verification failed", details: recaptchaResponse.data['error-codes'] });
    }
  } catch (err) {
    return res.status(500).json({ error: "Internal server error during reCAPTCHA verification" });
  }

  // Email sending
  try {
    let transporter = nodemailer.createTransport({
      host: "mail.topspeedservice.ro",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    let mailOptions = {
      from: `"${nume} ${prenume}" <${email}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: "New Contact Form Submission",
      text: `Name: ${nume} ${prenume}\nEmail: ${email}\nPhone: ${numar_de_telefon_optional || "N/A"}\nMessage: ${mesaj}`,
      html: `<p><strong>Name:</strong> ${nume} ${prenume}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${numar_de_telefon_optional || "N/A"}</p><p><strong>Message:</strong> ${mesaj}</p>`,
    };

    let info = await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    res.status(500).json({ error: `Error sending email: ${error.message}` });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
