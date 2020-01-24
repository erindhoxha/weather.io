// SERVICE
angular.module('weatherApp').service('getDayService', function() {
    var self = this;

    this.notLoaded = false;

    this.getCurrentDay = function() {
        return new Date().getDay();
    }

    this.getLength = function() {
        return self.city.length;
    }
})

