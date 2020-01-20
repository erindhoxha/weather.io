var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

// CONFIG ROUTER
weatherApp.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl:'pages/home.html',
        controller: 'homeController'
    })
    .when('/weather', {
        templateUrl:'pages/weather.html',
        controller: 'weatherController'
    })
})

// CONTROLLERS
weatherApp.controller('homeController', ['$scope','cityService','$http', '$resource', '$timeout', function($scope, cityService, $http, $resource, $timeout) {
    $timeout(function() {
        var birds = document.getElementsByClassName("pajaro");
        angular.forEach(birds, function(bird) {
          bird.classList.add('hide');
        });
    }, 0)
    $scope.key = '886705b4c1182eb1c69f28eb8c520e20';
    $scope.example = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=London&units=metric&cnt=7&APPID=' + $scope.key;
    $scope.city = cityService.city;
    $scope.length = cityService.getLength();

    $scope.days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    $http.get($scope.example)
    .success(function(response) {
        console.log(response);
        $scope.daysTemperatures = response.list;
    })
    .error(function(e) {
        console.log(e);
    })

    $scope.weatherAPI =
    $resource($scope.example, 
        {
        callback: "JSON_CALLBACK" 
        },
        {
        get: { method: "JSONP" }
        });
    $scope.weatherResult = $scope.weatherAPI.get({q: $scope.city, cnt: 2});
    console.log($scope.weatherResult);
}])

weatherApp.controller('weatherController', ['$scope','cityService', '$http', '$resource', function($scope, cityService, $http, $resource) {
    $scope.key = '886705b4c1182eb1c69f28eb8c520e20';
    $scope.example = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=London&units=metric&cnt=7&APPID=' + $scope.key;
    $scope.city = cityService.city;
    $scope.length = cityService.getLength();

    $scope.days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    $http.get($scope.example)
    .success(function(response) {
        console.log(response);
        $scope.daysTemperatures = response.list;
    })
    .error(function(e) {
        console.log(e);
    })

    $scope.weatherAPI =
    $resource($scope.example, 
        {
        callback: "JSON_CALLBACK" 
        },
        {
        get: { method: "JSONP" }
        });
    $scope.weatherResult = $scope.weatherAPI.get({q: $scope.city, cnt: 2});
    console.log($scope.weatherResult);
}])


// SERVICE
weatherApp.service('cityService', function() {
    var self = this;
    this.city = "New York, NY";

    this.getLength = function() {
        return self.city.length;
    }
})


