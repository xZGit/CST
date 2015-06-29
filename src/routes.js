"use strict";
var router = require("koa-router");


var controller = require("./controllers/index");


module.exports = function (app) {
    // register functions
    app.use(router(app));


    function setUpPageRoute(url) {
        var funcs = Array.prototype.slice.call(arguments, 1);
        app.get.apply(app, [url].concat(funcs));
        app.get.apply(app, ["/api" + url].concat(funcs))
    };


    app.get("/", controller.home);

    app.get("/home", controller.home);

    app.get("/getCategory/:category", controller.getCategory);

    app.get("/getUserInfo", controller.getUserInfo);

    app.get("/back/:category", controller.back);

    app.post("/api/setCategory", controller.setCategory);

    setUpPageRoute("/getResult/:id", controller.getResult);
};
