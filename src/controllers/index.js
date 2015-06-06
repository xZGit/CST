/**
 * Created by xx on 15/6/4.
 */


"use strict";

var querystring = require('querystring');
var async = require('async');
var OAuth = require('wechat-oauth');
var config = require('../../conf/config');
var client = new OAuth(config.app.appId, config.app.appsecret);
var categories = require('../data/data');
var categoryNames =["apps", "movies"];


var url = client.getAuthorizeURL(config.app.redirectUrl, config.app.state, config.app.scope);


var Controllers = {};


Controllers.index = function *() {

    this.redirect(url);
};


var a = 0;
Controllers.home = function *() {
    var session = this.session;
    if (!session.count) session.count = a++;
    this.body = yield this.render({count: session.count}, "basic");
};


Controllers.getCategory = function *() {
    var category = categories[0];
    if(this.params.category) category = categories[this.params.category] || categories[0];
    this.body = category;
};




Controllers.setCategory = function *(){




};


Controllers.getUserInfo = function *(){
   var param= querystring.parse(this.request.url.split('?')[1]);
   var that=this;
    async.auto({
        getAccessToken: function(callback){
            client.getAccessToken(param.code, callback);
        },
        getUserInfo:["getAccessToken", function(callback, results){
            client.getUser(results.getAccessToken.data.openid, callback);
        }]
    },function(err, results){

        that.session.openid=results.getUserInfo.openid;
        that.session.nickname=results.getUserInfo.nickname;
        that.body=that.render({nickname:that.session.nickname, headimgurl: results.getUserInfo.headimgurl}, "index");
    });

};







module.exports = Controllers;