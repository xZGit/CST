/**
 * Created by xx on 15/6/8.
 */

"use strict";


var app = require('../server');
//var request = require('supertest')(app);
var request = require("supertest").agent(app.listen());
var should  = require('should');


//
//describe('Test set category', function () {
//
//    var url="/api/setCategory";
//
//    it('return success', function (done) {
//        var req = request.post(url);
//        req.send({
//            category:"stars",
//            items:[1,2,14]
//        })
//            .end(function (err, res) {
//                var result = JSON.parse(res.text);
//                console.log(result);
//                result.should.have.property('success', true);
//                done();
//            });
//    });
//
//
//
//});

describe('Test getResult', function () {

    var url="/getResult/5575614120ffc1ad075a6341";

    it('return success', function (done) {
        var req = request.get(url);
        req.send({
            category:"stars",
            items:[1,2,14]
        })
            .end(function (err, res) {
                var result = JSON.parse(res.text);
                console.log(result);
                result.should.have.property('success', true);
                done();
            });
    });



});