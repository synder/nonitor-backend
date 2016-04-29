/**
 * Created by synder on 16/4/27.
 */
var conn = require('../database/monitor').conn;

var AppWebTransException = conn.model('AppWebTransException');

exports.getErrorTransactionInfo = function (app, callback) {
    AppWebTransException.find({app: app, type: AppWebTransException.WARN_TYPE.ERROR}).sort({time: -1}).limit(10).exec(callback);
};

exports.getTimeoutTransactionInfo = function (app, callback) {
    AppWebTransException.find({app: app, type: AppWebTransException.WARN_TYPE.TIMEOUT}).sort({time: -1}).limit(10).exec(callback);
};

exports.getWarnTransactionInfo = function (app, callback) {
    AppWebTransException.find({app: app, type: {$lt : AppWebTransException.WARN_TYPE.TIMEOUT}}).sort({time: -1}).limit(10).exec(callback);
};
