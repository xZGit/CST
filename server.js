"use strict";
/**
 * Dependencies
 */

var koa = require("koa");

/**
 * Config
 */
var config = require("./config/config");


/**
 * Server
 */
var app = module.exports = koa();

require("./src/models")(config);

require("./config/koa")(app, config);

// Routes
require("./config/routes")(app);


// Start app
if (!module.parent) {
 app.listen(config.app.port);
 console.log("Server started, listening on port: " + config.app.port);
}
console.log("Environment: " + config.app.env);
