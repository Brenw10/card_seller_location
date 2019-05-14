const worker = require('./worker');
const store = require('./store');
const haversine = require('haversine');

const getStoreWorker = (store, worker) => ({ worker, store, distance: haversine(store, worker) });

const getWorkersStores = () => store.get()
  .then(stores => stores.map(getStoreWorkers))
  .then(stores => Promise.all(stores));

const getStoreWorkers = store => worker.get()
  .then(workers => workers.map(worker => getStoreWorker(store, worker)));

module.exports = { getWorkersStores };