/**
 * Created by xx on 15/6/4.
 */


"use strict";

var Controllers = {
    };


Controllers.index = function *() {
    this.body = yield this.render("basic", {
        version: "33",
        commit: "33",
        STYLE_URL: "33",
        SCRIPT_URL:"33"
    });
};








module.exports=Controllers;