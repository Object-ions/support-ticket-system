const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 8000;

// Connect to DB
connectDB();

const app = express();

// In order to get data from the body: - 2 steps
// 1. This will allow us to send raw JSON
app.use(express.json());

// 2. To accept the URL encoded form
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello');
});

// Routes
app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
