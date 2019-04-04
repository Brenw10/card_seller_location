const express = require('express');
const sale = require('../services/sale');
const router = express.Router();

router.get('/', (_, res) => 
  sale.getWorkersByStores()
    .then(json => res.send(json))
);

module.exports = router;