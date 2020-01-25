var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);


// DIRECTIVES
weatherApp.directive('cloudsRender', function() {
    return {
        restrict: 'E',
        templateUrl: 'js/directives/clouds.html',
        replace:true,
        scope: {
            consoleLog: '&',
            weatherDay: '='
        }
    }
})

weatherApp.directive('weatherPanel', function() {
    return {
        restrict: 'E',
        templateUrl: 'js/directives/weatherPanel.html',
        scope: {
            daysTemp: '=',
            cels: '=',
        }
    }
})
