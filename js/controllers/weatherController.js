// CONTROLLERS

angular.module('weatherApp').controller('weatherController', ['$scope','cityService','$http', '$resource', '$timeout', '$routeParams', '$window', function($scope, cityService, $http, $resource, $timeout, $routeParams, $window) {

    // hide birds, when loaded
    $timeout(function() {
        var birds = document.getElementsByClassName("pajaro");
        angular.forEach(birds, function(bird) {
          bird.classList.add('hide');
        });
    }, 0)

    $scope.city = cityService.city;
    // key, example of the API call
    $scope.key = '886705b4c1182eb1c69f28eb8c520e20';
    $scope.example = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + $scope.city + '&units=metric&cnt=7&APPID=' + $scope.key;
    $scope.length = cityService.getLength();

    $scope.currentDay = new Date().getDay();
    $scope.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    $http.get($scope.example)
    .success(function(response) {

        $scope.daysTemperatures = response.list;

        console.log(response);

        // Check if it's day or night time
        const hours = new Date().getHours()
        const isDayTime = hours > 6 && hours < 20
        if (isDayTime) {
            $scope.celsius = Math.floor(response.list[$scope.currentDay].temp.day);
        } else {
            $scope.celsius = Math.floor(response.list[$scope.currentDay].temp.night);
        }

    })

    .error(function(e) {
        $window.location.href = '#/';
    })

    $scope.formatNumber = function(i) {
        return Math.round(i); 
    }

    $scope.convertToDate = function(dt) {
        return new Date(dt * 1000);
    }
    console.log($routeParams);

}])