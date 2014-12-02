angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('StationsCtrl', function($scope, Stations) {
  $scope.stations = Stations.all();
})

.controller('StationDetailCtrl', function($scope, $stateParams, Stations) {
  $scope.station = Stations.get($stateParams.stationId);
})

.controller('AccountCtrl', function($scope) {
});
