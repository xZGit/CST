/**
 * Created by xx on 15/6/6.
 */

"use strict";

var urllib = require('co-urllib');
var extend = require('util')._extend;
var querystring = require('querystring');

var AccessToken = function (data) {
    if (!(this instanceof AccessToken)) {
        return new AccessToken(data);
    }
    this.data = data;
};


AccessToken.prototype.isValid = function () {
    return !!this.data.access_token && (new Date().getTime()) < (this.data.create_at + this.data.expires_in * 1000);
};


var OAuth = function (appid, appsecret, getToken, saveToken) {
    this.appid = appid;
    this.appsecret = appsecret;
    // token的获取和存储
    this.store = {};
    this.getToken = function (openid) {
        return this.store[openid];
    };

    this.saveToken = function (data) {
        data.create_at = new Date().getTime();
        this.store[data.openid] = data;
    };
    this.defaults = {};
};


OAuth.prototype.setOpts = function (opts) {
    this.defaults = opts;
};

/*!
 * urllib的封装
 *
 * @param {String} url 路径
 * @param {Object} opts urllib选项
 */
OAuth.prototype.request = function *(url, opts) {
    var options = {};
    extend(options, this.defaults);
    if (typeof opts === 'function') {
        callback = opts;
        opts = {};
    }
    for (var key in opts) {
        if (key !== 'headers') {
            options[key] = opts[key];
        } else {
            if (opts.headers) {
                options.headers = options.headers || {};
                extend(options.headers, opts.headers);
            }
        }
    }

    return yield urllib.request(url, options);

};

/**
 * 获取授权页面的URL地址
 * @param {String} redirect 授权后要跳转的地址
 * @param {String} state 开发者可提供的数据
 * @param {String} scope 作用范围，值为snsapi_userinfo和snsapi_base，前者用于弹出，后者用于跳转
 */
OAuth.prototype.getAuthorizeURL = function (redirect, state, scope) {
    var url = 'https://open.weixin.qq.com/connect/oauth2/authorize';
    var info = {
        appid: this.appid,
        redirect_uri: redirect,
        response_type: 'code',
        scope: scope || 'snsapi_base',
        state: state || ''
    };
    return url + '?' + querystring.stringify(info) + '#wechat_redirect';
};

/**
 * 根据授权获取到的code，换取access token和openid
 * 获取openid之后，可以调用`wechat.API`来获取更多信息
 * Examples:
 * ```
 * api.getAccessToken(code, callback);
 * ```
 * Callback:
 *
 * - `err`, 获取access token出现异常时的异常对象
 * - `result`, 成功时得到的响应结果
 *
 * Result:
 * ```
 * {
 *  data: {
 *    "access_token": "ACCESS_TOKEN",
 *    "expires_in": 7200,
 *    "refresh_token": "REFRESH_TOKEN",
 *    "openid": "OPENID",
 *    "scope": "SCOPE"
 *  }
 * }
 * ```
 * @param {String} code 授权获取到的code
 */
OAuth.prototype.getAccessToken = function *(code) {
    var url = 'https://api.weixin.qq.com/sns/oauth2/access_token';
    var info = {
        appid: this.appid,
        secret: this.appsecret,
        code: code,
        grant_type: 'authorization_code'
    };
    var args = {
        data: info,
        dataType: 'json'
    };
    var result = yield this.request(url, args);
    if (!result.data || !result.data.openid || !result.data.access_token) throw new Error(result.data.errmsg);
    this.saveToken(result.data);
};

/**
 * 根据refresh token，刷新access token，调用getAccessToken后才有效
 * Examples:
 * ```
 * api.refreshAccessToken(refreshToken, callback);
 * ```
 * Callback:
 *
 * - `err`, 刷新access token出现异常时的异常对象
 * - `result`, 成功时得到的响应结果
 *
 * Result:
 * ```
 * {
 *  data: {
 *    "access_token": "ACCESS_TOKEN",
 *    "expires_in": 7200,
 *    "refresh_token": "REFRESH_TOKEN",
 *    "openid": "OPENID",
 *    "scope": "SCOPE"
 *  }
 * }
 * ```
 * @param {String} refreshToken refreshToken
 */
OAuth.prototype.refreshAccessToken = function *(refreshToken) {
    var url = 'https://api.weixin.qq.com/sns/oauth2/refresh_token';
    var info = {
        appid: this.appid,
        grant_type: 'refresh_token',
        refresh_token: refreshToken
    };
    var args = {
        data: info,
        dataType: 'json'
    };
    var result = yield urllib.request(url, args);
    if (result.data && result.data.openid && result.data.access_token) this.saveToken(result.data);
    return result;
};

OAuth.prototype._getUser = function *(options, accessToken) {
    var url = 'https://api.weixin.qq.com/sns/userinfo';
    var info = {
        access_token: accessToken,
        openid: options.openid,
        lang: options.lang || 'en'
    };
    var args = {
        data: info,
        dataType: 'json'
    };
    var result = yield this.request(url, args);
    return result;
};

/**
 * 根据openid，获取用户信息。
 * 当access token无效时，自动通过refresh token获取新的access token。然后再获取用户信息
 * Examples:
 * ```
 * api.getUser(options, callback);
 * ```
 *
 * Options:
 * ```
 * openId
 * // 或
 * {
 *  "openId": "the open Id", // 必须
 *  "lang": "the lang code" // zh_CN 简体，zh_TW 繁体，en 英语
 * }
 * ```
 * Callback:
 *
 * - `err`, 获取用户信息出现异常时的异常对象
 * - `result`, 成功时得到的响应结果
 *
 * Result:
 * ```
 * {
 *  "openid": "OPENID",
 *  "nickname": "NICKNAME",
 *  "sex": "1",
 *  "province": "PROVINCE"
 *  "city": "CITY",
 *  "country": "COUNTRY",
 *  "headimgurl": "http://wx.qlogo.cn/mmopen/g3MonUZtNHkdmzicIlibx6iaFqAc56vxLSUfpb6n5WKSYVY0ChQKkiaJSgQ1dZuTOgvLLrhJbERQQ4eMsv84eavHiaiceqxibJxCfHe/46",
 *  "privilege": [
 *    "PRIVILEGE1"
 *    "PRIVILEGE2"
 *  ]
 * }
 * ```
 * @param {Object|String} options 传入openid或者参见Options
 */
OAuth.prototype.getUser = function *(options) {
    if (typeof options !== 'object') {
        options = {
            openid: options
        };
    }

    var data = this.getToken(options.openid);
    // 没有token数据
    if (!data) throw new Error("wechat authorize fail");
    var token = AccessToken(data);
    if (token.isValid()) {
        return yield this._getUser(options, token.data.access_token);
    } else {
        var newToken = this.refreshAccessToken(token.data.refresh_token);
        if (!newToken.data || !newToken.data.access_token) throw new Error("wechat authorize fail")
        return yield this._getUser(options, newToken.data.access_token);
    }

};

module.exports = OAuth;

