const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig');
const cors = require('cors');

// Import your models

const userRoutes = require('./routes/userRoutes');
const addressRoutes = require('./routes/addressRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: '*', // Allow all origins. Change this to a specific origin or array of origins for better security.
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify the allowed HTTP methods
    allowedHeaders: '*', // Specify the allowed headers
  }));

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


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/users', userRoutes);
app.use('/addresses', addressRoutes);
app.use('/products', productRoutes)





// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
