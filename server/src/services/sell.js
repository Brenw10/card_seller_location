const csv = require('csvtojson');

function getWorkerByStore() {
  csv()
    .fromFile('./data/stores.csv')
    .then(json => console.log(json));

  csv()
    .fromFile('./data/workers.csv')
    .then(json => console.log(json));
}

module.exports = { getWorkerByStore };