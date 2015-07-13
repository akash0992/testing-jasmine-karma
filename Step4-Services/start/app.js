var app = angular.module('KarmaTest', []);
app.controller('Home', ["$scope", "$http", "Users", function ($scope, $http, Users) {
    var Home = this;
    Home.userInfo = {
        name: "deepak",
        age: 25,
        salary: 10000
    }
    Home.users = [];
    Home.init = function () {
        Users.then(function (resopnse) {
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

}]).service('Users', function ($http) {
    this.list = function (number) {
        return $http
            .get("http://localhost:8089/users");
    }
});