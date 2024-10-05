const express = require("express");
const path = require("path");
const compression = require("compression");
const fs = require("fs");
const nodemailer = require("nodemailer");
const axios = require("axios");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
require("dotenv").config({ path: "./credentials.env" });

const app = express();
const port = process.env.PORT || 3000;

// ... (previous middleware and configurations remain the same) ...

// Define rate limiter
const contactFormLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: "Too many requests from this IP, please try again after 15 minutes",
});

// Define spam keywords and blacklisted domains
const spamKeywords = [
  "viagra",
  "loan",
  "free",
  "win",
  "credit",
  "pariuri",
  "superbet",
  "castiga",
];
const blacklistedDomains = [
  "spamdomain.com",
  "disposablemail.com",
  "mailinator.com",
];

// Route for the contact form
app.post('/api/contact', contactFormLimiter, async (req, res) => {
  console.log('Request body:', req.body);
  
  const { 
    nume, 
    prenume, 
    email, 
    numar_de_telefon_optional, 
    mesaj, 
    honeypot, 
    recaptchaToken 
  } = req.body;

  // Honeypot field check
  if (honeypot) {
    console.warn('Spam detected via honeypot field');
    return res.status(400).json({ error: 'Spam detected' });
  }

  // Validate the input before proceeding
  if (!nume || !prenume || !email || !mesaj) {
    return res.status(400).json({ error: 'Please fill in all required fields.' });
  }

  // Email domain blacklist check
  const emailDomain = email.split("@")[1].toLowerCase();
  if (blacklistedDomains.includes(emailDomain)) {
    console.warn("Spam detected via email domain blacklist");
    return res.status(400).json({ error: "Spam detected" });
  }

  // Keyword filtering
  const messageContent = `${nume} ${prenume} ${email} ${mesaj}`.toLowerCase();
  const containsSpamKeyword = spamKeywords.some((keyword) =>
    messageContent.includes(keyword)
  );

  if (containsSpamKeyword) {
    console.warn("Spam detected via keyword filtering");
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

    console.log("reCAPTCHA verification response:", recaptchaResponse.data);

    if (!recaptchaResponse.data.success) {
      return res.status(400).json({ error: "reCAPTCHA verification failed" });
    }
  } catch (err) {
    console.error("reCAPTCHA verification error:", err);
    return res
      .status(500)
      .json({ error: "Internal server error during reCAPTCHA verification" });
  }

  try {
    // Create a transporter object using your SMTP server settings
    let transporter = nodemailer.createTransport({
      host: "mail.topspeedservice.ro",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email options
    let mailOptions = {
      from: `"${nume} ${prenume}" <${email}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: "New Contact Form Submission",
      text: `You have a new contact form submission\n
             Name: ${nume} ${prenume}\n
             Email: ${email}\n
             Phone (optional): ${numar_de_telefon_optional || "N/A"}\n
             Message: ${mesaj}`,
      html: `<p>You have a new contact form submission</p>
             <p><strong>Name:</strong> ${nume} ${prenume}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone (optional):</strong> ${numar_de_telefon_optional || "N/A"
        }</p>
             <p><strong>Message:</strong> ${mesaj}</p>`,
    };

    // Send the email
    let info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: `Error sending email: ${error.message}` });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
