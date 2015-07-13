var app = angular.module('KarmaTest', []);
app.controller('HomeCtrl', function($scope) {
    var Home = this;
    Home.firstName= "John";
    Home.lastName= "Doe";
});