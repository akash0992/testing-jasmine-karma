var app = angular.module('KarmaTest', []);
app.controller('Home', ["$scope", "$http", "UsersService", function ($scope, $http, UsersService) {
    var Home = this;
    Home.userInfo = {
        name: "deepak",
        age: 25,
        salary: 10000
    }
    Home.users = [];
    Home.init = function () {
        UsersService.list().then(function (resopnse) {
            $scope.$evalAsync(function () {
                Home.users = resopnse.data;
                console.log(Home.users)
            })
        }, function (resopnse) {
            console.error(resopnse);
        })
    }
    Home.setTime = function () {
        setTimeout(function () {
            Home.time = +new Date();
        }, 1000)
    }

}]).service('UsersService', function ($http) {
    this.list = function () {
        return $http.get("http://localhost:8089/users");
    }
});