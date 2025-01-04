const express = require('express');
const fs = require('fs').promises;
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const port = 9000;

// Middleware
// app.use(cors());
// app.use(morgan('dev'));

// Route
app.get('/', async (req, res) => {
    try {
        const data = await fs.readFile("./MOCK_DATA (3).json", "utf8");
        res.json(JSON.parse(data));
    } catch (err) {
        console.error("Error reading the file:", err.message);
        res.status(500).json({ error: "Failed to fetch data" });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server started on Port ${port}`);
});
