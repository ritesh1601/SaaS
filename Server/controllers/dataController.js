const fs = require('fs').promises;

// Controller function to fetch JSON data
const fetchData = async (req, res, next) => {
    const filePath = './MOCK_DATA (3).json';
    try {
        const data = await fs.readFile(filePath, 'utf8');
        res.json(JSON.parse(data));
    } catch (err) {
        console.error('Error reading the file:', err.message);
        next(err); // Pass the error to the error handling middleware
    }
};

module.exports = { fetchData };
