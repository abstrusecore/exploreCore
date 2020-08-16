app.factory('places', ['$http', function($http) {
    return $http.jsonp('https://en.wikipedia.org/w/api.php?action=query&list=geosearch&gsradius=10000&gscoord=32.7281%7C-117.1495&gslimit=30&format=json&callback=JSON_CALLBACK')
    
    .success(function(data) {
      return data;
    })
    .error(function(err) {
      return err;
    })
  }])