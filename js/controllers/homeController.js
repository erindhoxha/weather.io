
angular.module('weatherApp').controller('homeController', ['$scope','cityService', '$http', '$resource', 'getDayService', function($scope, cityService, $http, $resource, getDayService) {
    $scope.key = '886705b4c1182eb1c69f28eb8c520e20';
    $scope.example = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=London&units=metric&cnt=7&APPID=' + $scope.key;
    $scope.city = cityService.city;
    $scope.length = cityService.getLength();

    $scope.days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    $scope.currentDay = getDayService.getCurrentDay();

    console.log(getDayService);
    $http.get($scope.example)
    .success(function(response) {
        console.log(response);
        $scope.daysTemperatures = response.list;
    })
    .error(function(e) {
        console.log(e);
    })

    $scope.convertToDate = function(dt) {
        return new Date(dt);
    }

}])



// Resource

// $scope.weatherAPI =
// $resource($scope.example, 
//     {
//     callback: "JSON_CALLBACK" 
//     },
//     {
//     get: { method: "JSONP" }
//     });
// $scope.weatherResult = $scope.weatherAPI.get({q: $scope.city, cnt: 2});