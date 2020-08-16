app.controller('MainController', ['$scope', 'places','places2','places3','places4', function($scope,places,places2,places3,places4) {
    $scope.mapCenter = {
      lat: 32.731,
      lng: -117.150,
      zoom: 17
    },
    $scope.mapCenter2 = {
      lat: 32.7115,
      lng: -117.171,
      zoom: 16
    },
    $scope.mapCenter3 = {
      lat: 32.880,
      lng: -117.234,
      zoom: 15
    },
    $scope.mapCenter4 = {
      lat: 32.776,
      lng: -117.072,
      zoom: 16
    },
    places.success(function(data) {
      $scope.geodata = data;
      $scope.mapMarkers = geodataToMarkers($scope.geodata);
    })
    places2.success(function(data) {
      $scope.geodata2 = data;
      $scope.mapMarkers2 = geodataToMarkers($scope.geodata2);
    })
    places3.success(function(data) {
      $scope.geodata3 = data;
      $scope.mapMarkers3 = geodataToMarkers($scope.geodata3);
    })
    places4.success(function(data) {
      $scope.geodata4 = data;
      $scope.mapMarkers4 = geodataToMarkers($scope.geodata4);
    })
  }]);