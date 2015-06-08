/**
 * Created by xx on 15/6/4.
 */


"use strict";

var querystring = require('querystring');
var _ = require('lodash');
var OAuth = require('../../lib/wechatOauth');
var config = require('../../conf/config');
var client = new OAuth(config.app.appId, config.app.appsecret);
var categories = require('../data/data').category;
var categoryNames = _.keys(categories);


var url = client.getAuthorizeURL(config.app.redirectUrl, config.app.state, config.app.scope);


var Controllers = {};


Controllers.index = function *() {

    this.redirect(url);
};


Controllers.home = function *() {

    this.body = this.session;
};


Controllers.getCategory = function *() {
    if (!categories[this.params.category])  return yield this.throwCode(1002, this.params.category);
    this.body = {category: this.params.category, items: categories[this.params.category]};
};


/*
 * @param category 所属类目
 * @param items 所选项
 */
Controllers.setCategory = function *() {
    var category = this.request.body.category, items = this.request.body.items;
    if (!categories[category]) return yield this.throwCode(1002, category);
    if (_.size(_.uniq(items)) != 3) return yield this.throwCode(1002, items);

    var errorItem = _.find(items, function (item) {
        return item > categories[category].length;
    });
    if (errorItem) return yield this.throwCode(1002, errorItem);
    this.session.items = this.session.items || {};
    this.session.items[this.request.category] = this.request.items;
    var i = categoryNames.indexOf(category);
    if (i !== categoryNames.length - 1) {
        return this.redirect("getCategory/" + categoryNames[i + 1]);
    }
    return yield generateResult(this);
};
//;


Controllers.getUserInfo = function *() {
    //var param = querystring.parse(this.request.url.split('?')[1]);
    //var accessReq = yield client.getAccessToken(param.code);
    //var user = yield client.getUser(accessReq.data.openid);
    var user = {data: {openid: 123, nickname: "xx"}};
    this.session.openid = user.data.openid;
    this.session.nickname = user.data.nickname;
    this.body = yield this.render(user.data, "index");
};


function *generateResult(that) {

    return that.body = 66667777;
};

module.exports = Controllers;