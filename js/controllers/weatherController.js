// CONTROLLERS

angular.module('weatherApp').controller('weatherController', ['$scope','cityService','$http', '$resource', '$timeout', '$routeParams', '$window', '$location', 'getDayService', '$rootScope', '$window', function($scope, cityService, $http, $resource, $timeout, $routeParams, $window, $location, getDayService, $rootScope, $window) {

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

    $scope.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    $rootScope.bodyClass = 'weatherBody';

    $http.get($scope.example)
    .success(function(response) {

        $scope.daysTemperatures = response.list;
        $scope.currentDay = new Date().getDay();
        $scope.currentDayClick = new Date().getDay();

        console.log(response);

        $scope.icons = [];
            angular.forEach($scope.daysTemperatures, function(item) {
                if (item.weather[0].icon) {
                    $scope.icons.push('http://openweathermap.org/img/wn/' + item.weather[0].icon + '@2x.png');
                }
            })

        // Check if it's day or night time
        const hours = new Date().getHours()
        const isDayTime = hours > 6 && hours < 20

        if ($routeParams.day) {
            $scope.currentDay = $routeParams.day;
        }

        if (isDayTime) {
                $scope.celsius = Math.floor(response.list[$scope.currentDay].temp.day);
        } else {
                $scope.celsius = Math.floor(response.list[$scope.currentDay].temp.day);
        }
        getDayService.notLoaded = false;
    })
    .error(function(e) {
        $window.location.href = '#/';
        getDayService.notLoaded = true;
    })

    $scope.formatNumber = function(i) {
        return Math.round(i); 
    }
    $scope.convertToDate = function(dt) {
        return new Date(dt * 999.7);
    }
    $scope.click = function(index, e) {
        console.log(e);
        e.stopImmediatePropagation();
        e.preventDefault();
        $window.scrollTo(0, 0);
        $location.path("weather/" + index);
    }
}])