const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Define the static directory for serving HTML, CSS, and other static files
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to serve the static HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
