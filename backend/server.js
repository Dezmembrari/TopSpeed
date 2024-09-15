const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve the Vue 3 build files
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Route all other requests to index.html (for client-side routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});