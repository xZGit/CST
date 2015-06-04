/**
 * Created by xx on 15/6/4.
 */


"use strict";

var OAuth = require('wechat-oauth');
var config = require('../../conf/config');
var client = new OAuth(config.app.appId, config.app.appsecret);


var url = client.getAuthorizeURL(config.app.redirectUrl, config.app.state, config.app.scope);



var Controllers = {
    };


Controllers.index = function *() {

    this.redirect(url);
};


var a=0;
Controllers.home = function *() {
    var session = this.session;
    if(!session.count) session.count=a++;
    this.body = yield this.render("basic", {count:session.count});
};







module.exports=Controllers;