const express = require('express');
const sell = require('../services/sell');
const router = express.Router();

router.get('/', (req, res) => {
  sell.getWorkerByStore();
  res.sendStatus(200);
});

module.exports = router;