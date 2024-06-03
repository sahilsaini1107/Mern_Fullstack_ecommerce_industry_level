const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Import your models
const User = require('./models/users');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Database connection
mongoose.connect('mongodb+srv://aadornjewels:FBa3sMXnqMPwvNIx@cluster0.qmt8fen.mongodb.net/aadorn?retryWrites=true&w=majority')
.then(() => {
    console.log('Connected to database');
})
.catch((error) => {
    console.error('Error connecting to database:', error);
});


app.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
