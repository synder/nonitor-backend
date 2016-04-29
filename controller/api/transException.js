/**
 * Created by synder on 16/4/27.
 * @desc 获取系统异常
 */

var appTransException = require('../../model/appTransException');

exports.error = function (req, res, next) {
    var app = '5723296eb1f738b90649ee63';

    appTransException.getErrorTransactionInfo(app, function (err, warns) {
        if(err){
            return next(err);
        }

        res.json({
            code : 0,
            msg : null,
            data : warns
        });
    });

};


exports.timeout = function (req, res, next) {
    var app = 'key';

    appTransException.getTimeoutTransactionInfo(app, function (err, warns) {
        if(err){
            return next(err);
        }

        res.json({
            code : 0,
            msg : null,
            data : warns
        });
    });

};

exports.warn = function (req, res, next) {
    var app = 'key';

    appTransException.getWarnTransactionInfo(app, function (err, warns) {
        if(err){
            return next(err);
        }

        res.json({
            code : 0,
            msg : null,
            data : warns
        });
    });

};

