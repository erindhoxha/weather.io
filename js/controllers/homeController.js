
angular.module('weatherApp').controller('homeController', ['$scope','cityService', '$http', '$resource', 'getDayService', '$timeout','$routeParams', '$rootScope', function($scope, cityService, $http, $resource, getDayService, $timeout, $routeParams, $rootScope) {
    $scope.key = '886705b4c1182eb1c69f28eb8c520e20';
    $scope.example = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=Auckland&units=metric&cnt=7&APPID=' + $scope.key;
    $scope.weatherLoaded = getDayService.notLoaded;
    $scope.currentDay = new Date().getDay();
    $scope.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    $scope.city = cityService.city;
    $scope.$watch('city', function() {
        cityService.city = $scope.city;
    })

    $rootScope.bodyClass = "homeBody";
    
    $scope.go = function(e) {
        document.getElementById('loader').classList.remove('loader');
        document.getElementById('secondloader').classList.remove('secondloader');
       $timeout(function() {
        document.getElementById('loader').classList.add('loader');
        document.getElementById('secondloader').classList.add('secondloader');
       }, 0)
       $timeout(function() {
        window.location.href = "#/weather";
       }, 750)
       $timeout(function() {
        document.getElementById('loader').classList.remove('loader');
        document.getElementById('secondloader').classList.remove('secondloader');
       }, 1500)
    }

    $http.get($scope.example)
    .success(function(response) {
        $scope.daysTemperatures = response.list;
        $scope.date = new Date(response.list[0].dt * 1000)
    })

    .error(function(e) {
        // Error will be here
        console.log(e);
    })

    $scope.convertToDate = function(dt) {
        return new Date(dt * 999.7);
    }
}])