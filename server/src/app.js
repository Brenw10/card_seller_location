const express = require('express');
const app = express();

const sale = require('./routes/sale');

app.use('/sale', sale);

module.exports = app;