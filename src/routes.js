"use strict";
var router = require("koa-router");


var controller = require("./controllers/index");



module.exports = function (app) {
  // register functions
  app.use(router(app));


  app.get("/", controller.index);

  app.get("/home", controller.home);


  app.get("/category/:category", controller.getCategory);


  app.get("/getUserInfo", controller.getUserInfo);




};
