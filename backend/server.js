require('dotenv').config();
const express = require("express");
const path = require("path");
const compression = require("compression");
const fs = require("fs");
const nodemailer = require("nodemailer");
const axios = require("axios");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");

// Create Express app
const app = express();
const port = process.env.PORT || 3000;

// Initialize nodemailer transporter at startup instead of per request
const transporter = nodemailer.createTransport({
  host: "mail.topspeedservice.ro",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  pool: true, // Use pooled connections
  maxConnections: 5,
  maxMessages: 100
});

// Enhanced compression configuration
app.use(compression({
  level: 9, // Maximum compression
  threshold: 0, // Compress all responses
  filter: (req, res) => {
    if (req.headers['x-no-compression']) {
      return false;
    }
    return compression.filter(req, res);
  }
}));

// Trust proxy and set security headers
app.set('trust proxy', 1);
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "https://maps.googleapis.com", "https://maps.gstatic.com", "static.hotjar.com"],
      frameAncestors: ["'self'", "https://www.google.com"],
      imgSrc: ["'self'", "https://maps.gstatic.com", "https://*.googleusercontent.com"],
      styleSrc: ["'self'", "https://fonts.googleapis.com"],
      connectSrc: ["'self'", "https://www.google.com/recaptcha/", "https://maps.googleapis.com"],
    },
  },
  crossOriginEmbedderPolicy: false,
  crossOriginResourcePolicy: { policy: "cross-origin" }
}));

// Cache control middleware
const cacheControl = (duration) => {
  return (req, res, next) => {
    if (req.method === 'GET') {
      res.set('Cache-Control', `public, max-age=${duration}`);
    }
    next();
  };
};

// Serve static files with cache control
app.use(express.static(path.join(__dirname, '../frontend/dist'), {
  maxAge: '1y',
  etag: true,
  lastModified: true
}));

// Optimized compression middleware for specific file types
const serveCompressedFile = (req, res, next) => {
  const acceptEncoding = req.headers['accept-encoding'] || '';
  const filePath = path.join(__dirname, '../frontend/dist', req.url);

  if (acceptEncoding.includes('br') && fs.existsSync(`${filePath}.br`)) {
    req.url = req.url + '.br';
    res.set('Content-Encoding', 'br');
    res.set('Content-Type', req.url.endsWith('.js.br') ? 'application/javascript' : 'text/css');
  } else if (acceptEncoding.includes('gzip') && fs.existsSync(`${filePath}.gz`)) {
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', req.url.endsWith('.js.gz') ? 'application/javascript' : 'text/css');
  }
  next();
};

// Apply compressed file serving to specific routes
app.get('*.js', serveCompressedFile);
app.get('*.css', serveCompressedFile);

// Parse JSON with size limits
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Rate limiting with Redis (optional, requires redis package)
const contactFormLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  skipSuccessfulRequests: true
});

// Contact form route with optimizations
app.post('/api/contact', contactFormLimiter, async (req, res) => {
  const { 
    nume, 
    prenume, 
    email, 
    numar_de_telefon_optional, 
    mesaj, 
    honeypot, 
    recaptchaToken 
  } = req.body;

  // Early returns for validation
  if (honeypot || !nume || !prenume || !email || !mesaj) {
    return res.status(400).json({ error: 'Invalid submission' });
  }

  // Optimized spam checking
  const emailDomain = email.split("@")[1].toLowerCase();
  const messageContent = `${nume} ${prenume} ${email} ${mesaj}`.toLowerCase();
  
  if (blacklistedDomains.includes(emailDomain) || 
      spamKeywords.some(keyword => messageContent.includes(keyword))) {
    return res.status(400).json({ error: "Spam detected" });
  }

  try {
    // Verify reCAPTCHA with timeout
    const recaptchaResponse = await axios.post(
      'https://www.google.com/recaptcha/api/siteverify',
      null,
      {
        params: {
          secret: process.env.RECAPTCHA_SECRET_KEY,
          response: recaptchaToken,
        },
        timeout: 5000
      }
    );

    if (!recaptchaResponse.data.success) {
      return res.status(400).json({ error: "reCAPTCHA verification failed" });
    }

    // Send email using the pooled transporter
    await transporter.sendMail({
      from: `"${nume} ${prenume}" <${email}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: "New Contact Form Submission",
      text: `Name: ${nume} ${prenume}\nEmail: ${email}\nPhone: ${numar_de_telefon_optional || "N/A"}\nMessage: ${mesaj}`,
      html: `<p><strong>Name:</strong> ${nume} ${prenume}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${numar_de_telefon_optional || "N/A"}</p><p><strong>Message:</strong> ${mesaj}</p>`
    });

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Serve index.html for client-side routing with cache control
app.get('*', cacheControl(0), (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
    transporter.close();
  });
});