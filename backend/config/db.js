const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/davitiServer'); // Remove deprecated options
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('Database connection error:', error);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = connectDB;
