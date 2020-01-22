
// CONFIG ROUTER
weatherApp.config(function($routeProvider) {
    $routeProvider
    .when('/weather', {
        templateUrl:'pages/weather.html',
        controller: 'weatherController'
    })
    .when('/weather/:day', {
        templateUrl:'pages/weather.html',
        controller: 'weatherController'
    })
    .when('/', {
        templateUrl:'pages/home.html',
        controller: 'homeController'
    })
})
