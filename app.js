const koa = require("koa"),
    app = koa(),
    Router = require("koa-router")(),
    dLog = require("./logger");
var rUsers = require("./route")
//Middleware: request logger
app.use(dLog);
Router.get("/", function *(next) {
    this.body = "Hello World!";
});
app.use(function *interceptor(next){
    yield next;
    this.set("Access-Control-Allow-Origin", "*");
    this.set("Access-Control-Allow-Headers", "X-Requested-With");
});

app.use(Router.routes());
app.use(rUsers.routes());
var server = app.listen(process.argv[2]||8089, function(){
    console.log("Your api is running on::"+"http://localhost:"+(process.argv[2]||8089)+"/");
})