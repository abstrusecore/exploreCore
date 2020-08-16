app.controller('PortController', ['$scope', 'places', function($scope,places) {
  $scope.mapCenter = {
    lat: 32.731,
    lng: -117.150,
    zoom: 17
  },
  places.success(function(data) {
    $scope.geodata = data;
    $scope.mapMarkers = geodataToMarkers($scope.geodata);
  })
}]);