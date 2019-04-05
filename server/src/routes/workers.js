const express = require('express');
const worker = require('../services/worker');
const router = express.Router();

router.get('/', (_, res) =>
  worker.get()
    .then(json => res.send(json))
);

module.exports = router;