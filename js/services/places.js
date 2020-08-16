app.factory('places', ['$http', function($http) {
    return $http.jsonp('https://en.wikipedia.org/w/api.php?action=query&list=geosearch&gsradius=10000&gscoord=32.731%7C-117.150&gslimit=30&format=json&callback=JSON_CALLBACK')
    
    .success(function(data) {
      return data;
    })
    .error(function(err) {
      return err;
    })
  }])
  
app.factory('places2', ['$http', function($http) {
    return $http.jsonp('https://en.wikipedia.org/w/api.php?action=query&list=geosearch&gsradius=10000&gscoord=32.709%7C-117.171&gslimit=30&format=json&callback=JSON_CALLBACK')
    
    .success(function(data) {
      return data;
    })
    .error(function(err) {
      return err;
    })
  }])
app.factory('places3', ['$http', function($http) {
    return $http.jsonp('https://en.wikipedia.org/w/api.php?action=query&list=geosearch&gsradius=10000&gscoord=32.880%7C-117.234&gslimit=30&format=json&callback=JSON_CALLBACK')
    
    .success(function(data) {
      return data;
    })
    .error(function(err) {
      return err;
    })
  }])
app.factory('places4', ['$http', function($http) {
    return $http.jsonp('https://en.wikipedia.org/w/api.php?action=query&list=geosearch&gsradius=10000&gscoord=32.775%7C-117.072&gslimit=30&format=json&callback=JSON_CALLBACK')
    
    .success(function(data) {
      return data;
    })
    .error(function(err) {
      return err;
    })
  }])