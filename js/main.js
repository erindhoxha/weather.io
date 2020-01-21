var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

// CONFIG ROUTER
weatherApp.config(function($routeProvider) {
    $routeProvider
    .when('/weather', {
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
    this.city = "New York, NY";

    this.getLength = function() {
        return self.city.length;
    }
})


