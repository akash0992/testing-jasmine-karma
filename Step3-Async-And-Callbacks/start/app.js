var app = angular.module('KarmaTest', []);
app.controller('Home', ["$scope", "$http", function ($scope, $http) {
    var Home = this;
    Home.userInfo = {
        name: "deepak",
        age: 25,
        salary: 10000
    }
    Home.users = [];
    $http.get("http://localhost:8089/users")
        .then(function (resopnse) {
            $scope.$evalAsync(function(){
                Home.users = resopnse.data;
            })
        }, function (resopnse) {
            console.error(resopnse);
        })
}]);