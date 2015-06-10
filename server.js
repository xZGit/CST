"use strict";
/**
 * Dependencies
 */

var koa = require("koa");

/**
 * Config
 */
var config = require("./conf/config");


/**
 * Server
 */
var app = module.exports = koa();


require("./src/koa")(app, config);

require("./src/response")(app, config);
// Routes
require("./src/routes")(app);


// Start app
if (!module.parent) {
    app.listen(config.app.port);
    console.log("Server started, listening on port: " + config.app.port);
}
console.log("Environment: " + config.app.env);
