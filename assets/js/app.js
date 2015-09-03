var myApp = angular.module('myApp', ['ngRoute','ngMessages','ui.bootstrap','sailsResource']);

myApp.run(function(){
  console.log('AddressBookApp running');
})

myApp.config(['$routeProvider','$locationProvider','sailsResourceProvider', function($routeProvider,$locationProvider,sailsResourceProvider){

  sailsResourceProvider.configuration = {
    prefix: '/api',
    verbose: true
  };

  $locationProvider.html5Mode(true);

  $routeProvider
  .when('/', {
    templateUrl:'/views/home.html',
    controller:'HomeCtrl'
  })
  .when('/about', {
    templateUrl:'/views/about.html',
    controller:'AboutCtrl'
  })
  .when('/person/:id', {
    templateUrl:'views/person/show.html',
    controller:'PersonShowCtrl'
  })
  .otherwise({
    templateUrl: '/views/404.html'
  })

}])
