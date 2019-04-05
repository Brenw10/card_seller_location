const express = require('express');
const app = express();

const sales = require('./routes/sales');
const workers = require('./routes/workers');

app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/sales', sales);
app.use('/workers', workers);

module.exports = app;