// Import required packages
const express = require('express');
const cors = require('cors');

// Create an Express app
const app = express();

// Use CORS middleware
app.use(cors());

// Define a simple route
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the backend!!!!!!!.....!' });
});

// Start the server and listen on port 3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
