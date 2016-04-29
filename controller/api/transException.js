/**
 * Created by synder on 16/4/27.
 * @desc 获取系统异常
 */

var appTransException = require('../../model/appTransException');

exports.error = function (req, res, next) {
    var app = req.query.app;

    if(!app){
        return res.json({
            code : 0,
            msg : null,
            data : []
        });
    }

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
    var app = req.query.app;

    if(!app){
        return res.json({
            code : 0,
            msg : null,
            data : []
        });
    }

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
    var app = req.query.app;

    if(!app){
        return res.json({
            code : 0,
            msg : null,
            data : []
        });
    }

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

