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


    app.get("/", controller.index);

    app.get("/home", controller.home);

    app.get("/getCategory/:category", controller.getCategory);

    app.get("/getUserInfo", controller.getUserInfo);

    app.get("/getUserInfo", controller.getUserInfo);

    app.get("/test-app",function *(){
            this.body = yield this.render({}, "test-app");
    }
   );


    app.get("/test-book",function *(){
            this.body = yield this.render({}, "test-book");
        }
    );
    app.get("/test-music",function *(){
            this.body = yield this.render({}, "test-music");
        }
    );

    app.get("/test-role",function *(){
            this.body = yield this.render({}, "test-role");
        }
    );

    app.get("/test-start",function *(){
            this.body = yield this.render({}, "test-start");
        }
    );

    app.get("/test-video",function *(){
            this.body = yield this.render({}, "test-video");
        }
    );
    app.get("/test-end",function *(){
            this.body = yield this.render({}, "test-end");
        }
    );
    app.post("/api/setCategory", controller.setCategory);

    setUpPageRoute("/getResult/:id", controller.getResult);
};
