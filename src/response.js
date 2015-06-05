/**
 * Created by xx on 15/6/5.
 */


"use strict";

var codeMapMsg = require('./err').codeMapMsg;
var views = require("co-views");
var logger = require('../logger').getLogger(module);

/*
 * response middleware.
 */

module.exports = function (app, config) {
    // register functions
    app.use(
        function *result(next) {

            if (this.request.url.indexOf('/api') !== -1) {
                this.isApi = true;
            }

            this.processRender = views(config.app.root + "/src/views", {
                map: {html: "swig"},
                cache: config.app.env === "development" ? "memory" : false,
            });
            this.render = function *(code, data, template) {
                var result = {code: code};
                if (data) result.data = data;
                if (code != 0) {
                    result.error = codeMapMsg[code] || "unrecongize error";
                    template = "error";
                    logger.error(result.error);
                }
                if (this.isApi) {
                    return result;
                }
                return yield this.processRender(template, code == 0 ? data : result);
            };

            try {
                yield next;
                if (404 == this.response.status && !this.response.body) this.throw(404);

            } catch (err) {

                this.status = err.status || 500;

                logger.error(err.message, err.stack);

                var template = "error";
                //if(err.status==404) template="404";
                // application
                this.app.emit('error', err, this);

                var result = {code: err.code || this.status, error: err.message};

                if (this.isApi) {
                    return this.body = result;
                }

                this.body = yield this.processRender(template, result);
            }
        });


};


