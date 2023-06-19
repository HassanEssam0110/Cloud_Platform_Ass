const express = require('express');
const morgan = require('morgan');
const path = require('path');

const server = express();
const port = process.env.PORT || 3000;

// Middleware
server.use(morgan('dev'));
// ...
server.use(express.static(path.join(__dirname, 'public')));

// Routes
server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
// ...
// Start the server
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});