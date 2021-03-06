const express = require('express');
const sale = require('../services/sale');
const router = express.Router();

router.get('/', (_, res) =>
  sale.getWorkersStores().then(json => res.send(json))
);

module.exports = router;