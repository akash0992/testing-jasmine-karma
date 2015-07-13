var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
    this.firstName = "John";
    this.lastName = "Doe";
    var Person = function (name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    var _person;
    var Construct = function (f, args) {
        return function () {
            f.apply(this, args);
        };
    };
    this.createPerson = function (name, age, salary) {
        _person = new (Construct(Person, arguments));
    }
    this.getPerson = function () {
        return _person;
    }
});