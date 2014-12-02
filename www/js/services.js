angular.module('starter.services', [])


.factory('Stations', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var stations = [
    { id: 0, name: 'Scruff McGruff', from: '1.5km' },
    { id: 1, name: 'G.I. Joe', from: '3.5km' },
    { id: 2, name: 'Miss Frizzle', from: '10.5km' },
    { id: 3, name: 'Ash Ketchum', from: '23.5km' }
  ];

  return {
    all: function() {
      return stations;
    },
    get: function(stationId) {
      // Simple index lookup
      return stations[stationId];
    }
  }
});