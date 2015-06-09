"use strict";
var router = require("koa-router");


var controller = require("./controllers/index");


module.exports = function (app) {
    // register functions
    app.use(router(app));


    function setUpPageRoute(method, url) {
        var funcs = Array.prototype.slice.call(arguments, 2);
        app[method].apply(app, [url].concat(funcs));
        app[method].apply(app, ["/api" + url].concat(funcs))
    };


    app.get("/", controller.index);

    app.get("/home", controller.home);


    app.get("/getCategory/:category", controller.getCategory);


    app.get("/getUserInfo", controller.getUserInfo);


    setUpPageRoute("post", "/setCategory", controller.setCategory);

    setUpPageRoute("get", "/getResult/:id", controller.getResult);
};
