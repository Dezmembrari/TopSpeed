const express = require('express');
const path = require('path');
const compression = require('compression'); // Import compression middleware
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;

// Use compression middleware to enable Gzip compression
app.use(compression());

// Middleware to set the correct Content-Type for JS and CSS
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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
