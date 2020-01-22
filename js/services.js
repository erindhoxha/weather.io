// SERVICE
weatherApp.service('cityService', function() {
    var self = this;
    this.city = "";

    this.getLength = function() {
        return self.city.length;
    }
})
