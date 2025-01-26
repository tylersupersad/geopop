const express = require('express');
const path = require('path');

const dotenv = require('dotenv');

// load environment variables from .env file
dotenv.config();

const db = require('./src/services/db');
const app = express();

// set view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'src/views'));

// static files
app.use(express.static(path.join(__dirname, 'src/public')));

// make the database connection available globally
app.use((req, res, next) => {
  req.db = db;
  next();
});

// routes
const indexRouter = require('./src/routes/index'); 
app.use('/', indexRouter);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});