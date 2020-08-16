var app = angular.module('NearMeApp',['leaflet-directive', 'ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      // controller: 'MainController',
      // templateUrl: 'views/main.html'
      controller: 'AboutController',
      templateUrl: 'views/about.html'
    })
    .when('/balboa', {
      // controller: 'AboutController',
      // templateUrl: 'views/about.html'
      controller: 'MainController',
      templateUrl: 'views/main.html'
    })
    .when('/seaport', {
      // controller: 'AboutController',
      // templateUrl: 'views/about.html'
      controller: 'MainController',
      templateUrl: 'views/sea.html'
    })
    .when('/ucsd', {
      // controller: 'AboutController',
      // templateUrl: 'views/about.html'
      controller: 'MainController',
      templateUrl: 'views/ucsd.html'
    })
    .when('/sdsu', {
      // controller: 'AboutController',
      // templateUrl: 'views/about.html'
      controller: 'MainController',
      templateUrl: 'views/sdsu.html'
    })
    .otherwise({
      redirectTo: '/'
    })
})