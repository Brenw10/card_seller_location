const worker = require('./worker');
const store = require('./store');
const geolocation = require('./geolocation');

async function getWorkersStore() {
  const workers = await worker.get();
  const stores = await store.get();
  return stores.map(store => geolocation.getDistancePointToPlaces(store, workers))
    .map(list => list[0]);
}

module.exports = { getWorkersStore };