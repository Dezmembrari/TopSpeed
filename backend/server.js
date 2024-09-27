const express = require('express');
const path = require('path');
const compression = require('compression');
const fs = require('fs');
const nodemailer = require('nodemailer');
const axios = require('axios');  // For reCAPTCHA verification
const rateLimit = require('express-rate-limit');  // For rate limiting
const helmet = require('helmet'); // Add helmet middleware
require('dotenv').config({ path: './credentials.env' });

const app = express();
const port = process.env.PORT || 3000;

// Use compression middleware to enable Gzip compression
app.use(compression());

// Enable trust proxy
// app.set('trust proxy', 'loopback');

// Middleware to set the correct Content-Type for JS and CSS for FireFox
app.use((req, res, next) => {
  if (req.url.endsWith('.js')) {
    res.setHeader('Content-Type', 'application/javascript; charset=UTF-8');
  } else if (req.url.endsWith('.css')) {
    res.setHeader('Content-Type', 'text/css; charset=UTF-8');
  }
  next();
});

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
      scriptSrc: ["'self'","https://maps.googleapis.com","https://maps.gstatic.com" ],  // Allow scripts from Google Maps and Allow scripts from Google Maps static resources
      frameAncestors: ["'self'", "https://www.google.com"], // Allow framing from self and Google
      imgSrc: ["'self'", "https://maps.gstatic.com", "https://*.googleusercontent.com"], // Allow images from Google User Content and Allow images from Google Maps static resources
      styleSrc: ["'self'","https://fonts.googleapis.com"],  // Allow styles from Google Fonts (if used)
    },
  },
}));

// Define rate limiter
const contactFormLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,  // 15 minutes
  max: 5,  // Limit each IP to 5 requests per windowMs
  message: 'Too many requests from this IP, please try again after 15 minutes',
});

// Define spam keywords
const spamKeywords = ['viagra', 'loan', 'free', 'win', 'credit', 'pariuri', 'superbet', 'castiga'];

// Define blacklisted email domains
const blacklistedDomains = ['spamdomain.com', 'disposablemail.com', 'mailinator.com'];

// Route for the contact form - updated to /api/contact
app.post('/api/contact', contactFormLimiter, async (req, res) => {
  console.log('Request body:', req.body);
  
  const { nume, prenume, email, numar_de_telefon_optional, mesaj, honeypot, recaptchaToken } = req.body;

  // Honeypot field check
  if (honeypot) {
    console.warn('Spam detected via honeypot field');
    return res.status(400).send('Spam detected');
  }

  // Validate the input before proceeding
  if (!nume || !prenume || !email) {
    return res.status(400).send('Please fill in all required fields.');
  }

  // Email domain blacklist check
  const emailDomain = email.split('@')[1].toLowerCase();
  if (blacklistedDomains.includes(emailDomain)) {
    console.warn('Spam detected via email domain blacklist');
    return res.status(400).send('Spam detected');
  }

  // Keyword filtering
  const messageContent = `${nume} ${prenume} ${email} ${mesaj}`.toLowerCase();
  const containsSpamKeyword = spamKeywords.some((keyword) => messageContent.includes(keyword));

  if (containsSpamKeyword) {
    console.warn('Spam detected via keyword filtering');
    return res.status(400).send('Spam detected');
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
  
    console.log('reCAPTCHA verification response:', recaptchaResponse.data);
  
    if (!recaptchaResponse.data.success) {
      return res.status(400).send('reCAPTCHA verification failed');
    }
  } catch (err) {
    console.error('reCAPTCHA verification error:', err);
    return res.status(500).send('Internal server error during reCAPTCHA verification');
  }

  try {
    // Create a transporter object using your SMTP server settings
    let transporter = nodemailer.createTransport({
      host: 'mail.topspeedservice.ro',  // Replace with your SMTP server
      port: 587,  // Use the correct port (25, 465, or 587)
      secure: false,  // true for port 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,  // Your email address
        pass: process.env.SMTP_PASS,  // Your email password
      },
    });

    // Email options
    let mailOptions = {
      from: `"${nume} ${prenume}" <${email}>`,  // Sender name and email (user input)
      to: process.env.SMTP_USER,  // Where the form will be sent
      replyTo: email,
      subject: 'New Contact Form Submission',
      text: `You have a new contact form submission\n
             Name: ${nume} ${prenume}\n
             Email: ${email}\n
             Phone (optional): ${numar_de_telefon_optional || 'N/A'}\n
             Message: ${mesaj}`,  // Plain text body
      html: `<p>You have a new contact form submission</p>
             <p><strong>Name:</strong> ${nume} ${prenume}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone (optional):</strong> ${numar_de_telefon_optional || 'N/A'}</p>
             <p><strong>Message:</strong> ${mesaj}</p>`,  // HTML body
    };

    // Send the email
    let info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    res.status(200).send('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);  // Log the error object
    res.status(500).send(`Error sending email: ${error.message}`);  // Include error details in the response
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});