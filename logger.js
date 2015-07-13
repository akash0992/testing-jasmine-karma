module.exports = function *reqlogger(next){
    console.log('%s - %s %s',new Date().toISOString(), this.request.method, this.request.url);
    yield next;
}