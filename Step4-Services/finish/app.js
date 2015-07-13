var app = angular.module('KarmaTest', []);
app.controller('Home', ["$scope", "$http", function ($scope, $http) {
    var Home = this;
    Home.userInfo = {
        name: "deepak",
        age: 25,
        salary: 10000
    }
    Home.users = [];
    Home.init = function(){
        $http.get("http://localhost:8089/users")
            .then(function (resopnse) {
                $scope.$evalAsync(function(){
                    Home.users = resopnse.data;
                    console.log(Home.users)
                })
            }, function (resopnse) {
                console.error(resopnse);
            })
    }
    Home.setTime = function() {
        setTimeout(function(){
            Home.time = +new Date();
        },1000)
    }

}]);