const express = require('express');
const path = require('path');

const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const db = require('./services/db');
const app = express();

// Set view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Make the database connection available globally
app.use((req, res, next) => {
  req.db = db;
  next();
});

// Routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});