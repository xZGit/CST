/**
 * Created by xx on 15/6/4.
 */


"use strict";

var OAuth = require('wechat-oauth');
var config = require('../../config/config');
var client = new OAuth(config.app.appId, config.app.appsecret);


var url = client.getAuthorizeURL(config.app.redirectUrl, config.app.state, config.app.scope);



var Controllers = {
    };


Controllers.index = function *() {

    this.redirect(url);
};


module.exports=Controllers;