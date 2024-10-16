require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const app = express();

// Middlewares for security and performance
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve precompressed files for js and css
const serveCompressedFiles = (req, res, next) => {
  const ext = req.url.endsWith('.js') ? '.js' : '.css';
  const brotliPath = path.join(__dirname, '../frontend/dist', req.url + '.br');
  const gzipPath = path.join(__dirname, '../frontend/dist', req.url + '.gz');

  if (fs.existsSync(brotliPath)) {
    req.url += '.br';
    res.set('Content-Encoding', 'br');
  } else if (fs.existsSync(gzipPath)) {
    req.url += '.gz';
    res.set('Content-Encoding', 'gzip');
  }
  next();
};

app.get(['*.js', '*.css'], serveCompressedFiles);

// Serve static files with long-term caching
app.use(express.static(path.join(__dirname, '../frontend/dist'), {
  maxAge: '1y',  // Cache for one year
  etag: false,
  lastModified: false,
}));

// Contact form route
app.post('/api/contact', async (req, res) => {
  const { name, email, message, recaptchaToken, honeypot } = req.body;
  
  // Check honeypot field (should be empty)
  if (honeypot) {
    return res.status(400).json({ error: "Spam detected!" });
  }

  // Keyword filtering
  const forbiddenWords = ["badword1", "badword2"];
  const isForbidden = forbiddenWords.some(word => message.includes(word));
  if (isForbidden) {
    return res.status(400).json({ error: "Message contains forbidden content." });
  }

  // Validate reCAPTCHA and send email concurrently
  const verifyRecaptchaAndSendMail = async () => {
    const recaptchaSecret = process.env.RECAPTCHA_SECRET;
    const transporter = require('nodemailer').createTransport({
      host: "mail.topspeedservice.ro",
      port: 587,
      secure: false,
      pool: true,
      maxConnections: 5,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    return Promise.all([
      axios.post('https://www.google.com/recaptcha/api/siteverify', null, {
        params: {
          secret: recaptchaSecret,
          response: recaptchaToken,
        },
      }),
      transporter.sendMail(mailOptions),
    ]);
  };

  try {
    const [recaptchaResponse, mailInfo] = await verifyRecaptchaAndSendMail();
    if (!recaptchaResponse.data.success) {
      return res.status(400).json({ error: "reCAPTCHA verification failed", details: recaptchaResponse.data['error-codes'] });
    }
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    res.status(500).json({ error: `Error: ${error.message}` });
  }
});

// Enable HTTP Strict Transport Security (HSTS)
app.use(helmet.hsts({
  maxAge: 31536000, // 1 year in seconds
  includeSubDomains: true,
}));

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
