var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

// CONFIG ROUTER
weatherApp.config(function($routeProvider) {
    $routeProvider
    .when('/weather', {
        templateUrl:'pages/weather.html',
        controller: 'weatherController'
    })
    .when('/weather/:days', {
        templateUrl:'pages/weather.html',
        controller: 'weatherController'
    })
    .when('/', {
        templateUrl:'pages/home.html',
        controller: 'homeController'
    })
})


// SERVICE
weatherApp.service('cityService', function() {
    var self = this;
    this.city = "";

    this.getLength = function() {
        return self.city.length;
    }
})

document.getElementsByTagName('a').addEventListener('click', function(e) {
    e.preventDefault();
})
