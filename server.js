const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve all static files (HTML, CSS, images, etc.)
app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
  console.log(`Portfolio running on port ${PORT}`);
});