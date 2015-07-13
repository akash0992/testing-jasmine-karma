const Router = require('koa-router'),
    User = require("./users.json"),
    _ = require("lodash");
var users = new Router({
    prefix: '/users'
});

users.get('/', function *(next) {
    this.body =User.list;
})
.get('/:name', function *(next) {
    var user = _.find(User.list, {name: this.params.name});
    this.body = user;
})
module.exports = users;