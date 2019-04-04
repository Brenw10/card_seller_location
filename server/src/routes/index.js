const express = require('express');
const sell = require('../services/sell');
const router = express.Router();

router.get('/', (_, res) => {
  sell.getWorkersByStores()
    .then(json => res.send(json));
});

module.exports = router;