var app = angular.module('KarmaTest', []);
app
    .controller('Home', ["$scope", "$http", "UsersService", function ($scope, $http, UsersService) {
        var Home = this;
        Home.userInfo = {
            name: "deepak",
            age: 25,
            salary: 10000
        }
        $scope.age = 30;
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

    }])
    .service('UsersService', function ($http) {
        this.list = function () {
            return $http.get("http://localhost:8089/users");
        }
    })
    .filter('length', function () {
        return function (text) {
            return ('' + (text || '')).length;
        }
    })
    .directive('userInfo', function () {
        return {
            restrict: 'E',
            replace: true,
            template: "<h4>Im {{Home.userInfo.age}} year old.</h4>"
        };
    });