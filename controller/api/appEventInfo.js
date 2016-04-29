/**
 * Created by synder on 16/4/28.
 */
var appNodeEvent = require('../../model/appNodeEvent');

exports.crash = function (req, res, next) {

    var app = req.query.app;

    if(!app){
        return res.json({
            code : 0,
            msg : null,
            data : []
        });
    }

    appNodeEvent.getCrashEvent(app, function (err, events) {

        if(err){
            return next(err);
        }

        res.json({
            code :0.,
            msg : null,
            data: events
        });
    });
    
};

exports.error = function (req, res, next) {
    var app = req.query.app;

    if(!app){
        return res.json({
            code : 0,
            msg : null,
            data : []
        });
    }

    appNodeEvent.getErrorEvent(app, function (err, events) {

        if(err){
            return next(err);
        }

        res.json({
            code :0.,
            msg : null,
            data: events
        });
    });
};

exports.stop = function (req, res, next) {
    var app = req.query.app;

    if(!app){
        return res.json({
            code : 0,
            msg : null,
            data : []
        });
    }

    appNodeEvent.getStopEvent(app, function (err, events) {

        if(err){
            return next(err);
        }

        res.json({
            code :0.,
            msg : null,
            data: events
        });
    });
};

exports.start = function (req, res, next) {
    var app = req.query.app;

    if(!app){
        return res.json({
            code : 0,
            msg : null,
            data : []
        });
    }

    appNodeEvent.getStartEvent(app, function (err, events) {

        if(err){
            return next(err);
        }

        res.json({
            code :0.,
            msg : null,
            data: events
        });
    });
};

