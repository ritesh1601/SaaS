require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { connectMongoDB } = require('./models/database');
const dataRoutes = require('./routes/dataRoutes');
const { sendError } = require('./views/errorView');

const app = express();
const port = process.env.PORT || 9000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/mini-Project';

// MongoDB Connection
(async () => {
    try {
        await connectMongoDB(MONGO_URI);
    } catch (err) {
        console.error('Failed to connect to MongoDB. Exiting...');
        process.exit(1);
    }
})();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

// Routes
app.use('/', dataRoutes);

// Error handling middleware
app.use(sendError);

// Start the server
app.listen(port, () => {
    console.log(`Server started on Port ${port}`);
});
