const csv = require('csvtojson');

function get() {
  return csv().fromFile('./data/stores.csv');
}

module.exports = { get };