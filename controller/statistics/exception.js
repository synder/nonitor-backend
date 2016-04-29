/**
 * Created by synder on 16/4/27.
 * @desc 获取系统异常
 */

var exception = require('../../model/statistics/exception');

exports.error = function (req, res, next) {
    var app = 'key';

    exception.getErrorTransactionInfo(app, function (err, warns) {
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

    exception.getTimeoutTransactionInfo(app, function (err, warns) {
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

    exception.getWarnTransactionInfo(app, function (err, warns) {
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

