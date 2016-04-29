/**
 * Created by synder on 16/4/28.
 */
var appNodeEvent = require('../../model/appNodeEvent');

exports.crash = function (req, res, next) {

    var app = '5723296eb1f738b90649ee63';

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
    var app = '5723296eb1f738b90649ee63';

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
    var app = '5723296eb1f738b90649ee63';

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
    var app = '5723296eb1f738b90649ee63';

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

