/**
 * Created by xx on 15/6/4.
 */


"use strict";

var querystring = require('querystring');
var OAuth = require('../../lib/wechatOauth');
var config = require('../../conf/config');
var client = new OAuth(config.app.appId, config.app.appsecret);
var categories = require('../data/data');
var categoryNames = ["apps", "movies"];


var url = client.getAuthorizeURL(config.app.redirectUrl, config.app.state, config.app.scope);


var Controllers = {};


Controllers.index = function *() {

    this.redirect(url);
};


var a = 0;
Controllers.home = function *() {

    var that = this;
    async.auto({
        getAccessToken: function (callback) {
            callback();
        },

    }, function (err, results) {

        that.body = 77;
    });
};


Controllers.getCategory = function *() {
    var category = categories[0];
    if (this.params.category) category = categories[this.params.category] || categories[0];
    this.body = category;
};


Controllers.setCategory = function *() {


};


Controllers.getUserInfo = function *() {
    var param = querystring.parse(this.request.url.split('?')[1]);
    var accessReq = yield client.getAccessToken(param.code);
    console.log(accessReq);
    var user = yield client.getUser(accessReq.data.openid);
    this.body = this.render(user, "index");
};


module.exports = Controllers;