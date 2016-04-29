/**
 * Created by synder on 16/4/28.
 */
var event = require('../../model/statistics/event');

exports.crash = function (req, res, next) {

    var app = 'key';

    event.getCrashEvent(app, function (err, events) {

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
    var app = 'key';

    event.getErrorEvent(app, function (err, events) {

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
    var app = 'key';

    event.getStopEvent(app, function (err, events) {

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
    var app = 'key';

    event.getStartEvent(app, function (err, events) {

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

