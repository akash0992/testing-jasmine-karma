var app = angular.module('KarmaTest', []);
app
    .controller('Home', ["$scope", "$http", "UsersService", function ($scope, $http, UsersService) {
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
    }])
    .service('UsersService', function ($http) {
        this.list = function () {
            return $http.get("users/");
        }
    })
    //.service("redditService",
    //function ($http) {
    //    return {
    //        getSubredditsSubmittedToBy: function (user) {
    //            return $http.get("http://api.reddit.com/user/" + user + "/submitted.json").then(function (response) {
    //                var posts, subreddits;
    //                posts = response.data.data.children;
    //                // transform data to be only subreddit strings
    //                subreddits = posts.map(function (post) {
    //                    return post.data.subreddit;
    //                });
    //                // de-dupe
    //                subreddits = subreddits.filter(function (element, position) {
    //                    return subreddits.indexOf(element) === position;
    //                });
    //                return subreddits;
    //            });
    //        }
    //    };
    //});