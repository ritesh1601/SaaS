const mongoose = require('mongoose');

const connectMongoDB = async (MONGO_URI) => {
    try {
        await mongoose.connect(MONGO_URI); // No options needed for newer driver versions
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('MongoDB connection error:', err.message);
        throw err;
    }
};

module.exports = { connectMongoDB };
