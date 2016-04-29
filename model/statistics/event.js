/**
 * Created by synder on 16/4/28.
 */


var conn = require('../../database/monitor').conn;

var AppNodeEvent = conn.model('AppNodeEvent');

exports.getCrashEvent = function (app, callback) {
    AppNodeEvent.find({app: app, type: AppNodeEvent.TYPE.CRASH}).sort({time: -1}).exec(callback);
};

exports.getErrorEvent = function (app, callback) {
    AppNodeEvent.find({app: app, type: AppNodeEvent.TYPE.ERROR}).sort({time: -1}).exec(callback);
};

exports.getStopEvent = function (app, callback) {
    AppNodeEvent.find({app: app, type: AppNodeEvent.TYPE.STOP}).sort({time: -1}).exec(callback);
};

exports.getStartEvent = function (app, callback) {
    AppNodeEvent.find({app: app, type: AppNodeEvent.TYPE.START}).sort({time: -1}).exec(callback);
};