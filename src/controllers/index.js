/**
 * Created by xx on 15/6/4.
 */


"use strict";

var querystring = require('querystring');
var mongoose = require("mongoose");
var Record = mongoose.model("Record");
var _ = require('lodash');
var OAuth = require('../../lib/wechatOauth');
var config = require('../../conf/config');
var client = new OAuth(config.app.appId, config.app.appsecret);
var categories = require('../data/data').category;
var results = require('../data/data').results;
var categoryNames = _.keys(categories);


var url = client.getAuthorizeURL(config.app.redirectUrl, config.app.state, config.app.scope);


var Controllers = {};


Controllers.index = function *() {

    this.body = yield this.render({}, "test-start");
};


Controllers.home = function *() {

    this.redirect(url);
};


Controllers.getCategory = function *() {
    if (!categories[this.params.category]) {
        return yield this.throwCode(1002, this.params.category);
    }
    this.body = yield this.render({
        category: this.params.category,
        //items: categories[this.params.category]
    }, this.params.category);
};


Controllers.back = function *() {
    if (!categories[this.params.category]) {
        return yield this.throwCode(1002, this.params.category);
    }
    var i = categoryNames.indexOf(this.params.category);
    if (i == 0) return this.redirect("/getUserInfo");
    this.redirect("/getCategory/" + categoryNames[i - 1]);
};


/*
 * @param category 所属类目
 * @param items 所选项
 */
Controllers.setCategory = function *() {

    var category = this.request.body.category, items = this.request.body.items;
    if (!categories[category]) return yield this.throwCode(1002, category);
    if (_.size(_.uniq(items)) != 3) return yield this.throwCode(1004, items);

    var errorItem = _.find(items, function (item) {
        return item > categories[category].length;
    });
    if (errorItem) return yield this.throwCode(1002, errorItem);
    this.session.items = this.session.items || {};
    this.session.items[category] = items;
    var i = categoryNames.indexOf(category);
    if (i !== categoryNames.length - 1) {
        return this.body = yield this.render({nextCategoty: categoryNames[i + 1]});
    }
    return yield generateResult(this);
};
//;


Controllers.getUserInfo = function *() {
    if (!this.session.openid) {
        //var param = querystring.parse(this.request.url.split('?')[1]);
        //var accessReq = yield client.getAccessToken(param.code);
        //var user = yield client.getUser(accessReq.data.openid);
        var user = {data: {openid: 123, nickname: "xx", headimgurl:"http://wx.qlogo.cn/mmopen/EuDV2TXLU1ohdVLJDQEFY0bMpMXCjice6fC8azRCxPvTKCngS2Bpb3icdZOic6xgzTPZIqeDtZico6DftlNFqS8edo19zicanjOicp/0"}};
        this.session.openid = user.data.openid;
        this.session.nickname = user.data.nickname;
        this.session.headimgurl = user.data.headimgurl;
        this.session.items = {};
    }
    this.body = yield this.render(this.session, "start");
};


Controllers.getResult = function *() {
    var id = this.params.id;
    var record = yield Record.findOne({_id: id}).exec();
    console.log(record);
    if (!record || !record.result) return yield this.throwCode(1003);
    var opt = {nickname: record.wechatName, openid: record.openid, selfOpenId: this.session.openid || ""};
    this.body = yield this.render(_.merge(opt, results[record.result]), "end");
};


function *generateResult(that) {

    var items = that.session.items;
    var openid = that.session.openid;
    var nickname = that.session.nickname;
    //var items = {apps: [1, 15, 3], movies: [2, 15, 8]};
    //var openid = "##$$$";
    //var nickname = "xx";
    //cacluate the result

    var result = {};
    _.forEach(items, function (v, k) {
        _(v).forEach(function (n) {
            var resultMaps = categories[k][n - 1]["results"];
            _(resultMaps).forEach(function (r) {
                result[r.id] = result[r.id] ? result[r.id] + r.score : r.score;
            }).value();
        }).value();
    });

    var lastResult = [];
    var currentLowestRate = 0;
    var currentHighestRate = 0;
    _.forEach(result, function (v, k) {
        var rate = v / results[k].score;
        if (rate > config.app.rate) {
            if (lastResult.length < 2) {
                lastResult.push(k);
                if (lastResult.length == 0) {
                    currentHighestRate = currentLowestRate = rate;
                } else {
                    if (rate > currentHighestRate) {
                        currentHighestRate = rate;
                        lastResult.reverse();
                    } else {
                        currentLowestRate = rate;
                    }
                }
            }
            if (lastResult.length == 2) {
                if (rate > currentHighestRate) {
                    currentLowestRate = currentHighestRate;
                    currentHighestRate = rate;
                    lastResult.pop();
                    lastResult.unshift(k);

                } else if (rate < currentHighestRate && rate > currentLowestRate) {
                    currentLowestRate = rate;
                    lastResult.pop();
                    lastResult.push(k);
                }
            }
        }
    });

    function getSortAndAdd(arr) {
        if (arr[0] > arr[1]) {
            return parseInt(arr[1].toString() + arr[0].toString());
        }
        return parseInt(arr[0].toString() + arr[1].toString());
    }

    var last;
    if (lastResult.length == 0) {
        last = 9;
    }
    if (lastResult.length == 2) {
        last = getSortAndAdd(lastResult);
    }
    if (lastResult.length == 1 && !results[last]) last = lastResult[0];
    var record = new Record();
    record.openid = openid;
    record.wechatName = nickname;
    record.result = last;
    var r = yield record.save();
    //delete that.session.items;
    that.body = yield that.render({result: r._id});

};


module.exports = Controllers;