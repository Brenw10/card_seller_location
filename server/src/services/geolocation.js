const haversine = require('haversine');

function getDistancePointToPlaces(point, places) {
  return places
    .map(place => ({ point: point.name, place: place.name, distance: haversine(point, place) }))
    .sort((a, b) => a.distance - b.distance);
}

module.exports = { getDistancePointToPlaces };