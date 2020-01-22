
angular.module('weatherApp').controller('homeController', ['$scope','cityService', '$http', '$resource', 'getDayService', '$timeout','$routeParams', function($scope, cityService, $http, $resource, getDayService, $timeout, $routeParams) {
    $scope.key = '886705b4c1182eb1c69f28eb8c520e20';
    $scope.example = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=Auckland&units=metric&cnt=7&APPID=' + $scope.key;
    $scope.length = cityService.getLength();

    $scope.days = ['Sunday' ,'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    $scope.currentDay = getDayService.getCurrentDay();

    $scope.city = cityService.city;
    $scope.$watch('city', function() {
        cityService.city = $scope.city;
    })
    
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
    })
    .error(function(e) {
        console.log(e);
    })

    $scope.convertToDate = function(dt) {
        return new Date(dt * 1000);
    }

}])



// Resource

