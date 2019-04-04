const csv = require('csvtojson');

function get() {
  return csv().fromFile('./data/workers.csv');
}

module.exports = { get };