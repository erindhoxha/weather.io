// CONTROLLERS

angular.module('weatherApp').controller('weatherController', ['$scope','cityService','$http', '$resource', '$timeout', function($scope, cityService, $http, $resource, $timeout) {

    // hide birds, when loaded
    $timeout(function() {
        var birds = document.getElementsByClassName("pajaro");
        angular.forEach(birds, function(bird) {
          bird.classList.add('hide');
        });
    }, 0)

    $scope.currentDate = new Date().getDay();

    // key, example of the API call
    $scope.key = '886705b4c1182eb1c69f28eb8c520e20';
    $scope.example = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=Auckland&units=metric&cnt=7&APPID=' + $scope.key;
    $scope.city = cityService.city;
    $scope.length = cityService.getLength();

    $scope.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    $http.get($scope.example)
    .success(function(response) {
        $scope.daysTemperatures = response.list;
        const hours = new Date().getHours()
        const isDayTime = hours > 6 && hours < 20
        if (isDayTime) {
            $scope.celsius = Math.floor(response.list[$scope.currentDate].temp.day);
        } else {
            $scope.celsius = Math.floor(response.list[$scope.currentDate].temp.night);
        }
    })
    .error(function(e) {
        console.log(e);
    })

    // If you want to change the API Values
    // Resource helps if you want to change the arguments q: or cnt: in angularJS
    $scope.weatherAPI =
    $resource($scope.example, 
        {
            callback: "JSON_CALLBACK" 
        },
        {
            get: { method: "JSONP" }
        });
    $scope.weatherResult = $scope.weatherAPI.get({q: $scope.city, cnt: 2});

}])