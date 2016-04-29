/**
 * Created by synder on 16/4/29.
 */

var crypto = require('crypto');
var userApplication = require('../../model/userApplication');

var hash = function (content, type) {
    return crypto.createHash(type).update(content).digest('hex')
};

/**
 * @desc use's applications
 * */
exports.listUserApplications = function (req, res, next) {

    var userId = req.user.id;

    userApplication.findAllUserAppAgentAccount(userId, function (err, apps) {
        if (err) {
            return next(err);
        }

        res.json({
            code: 0,
            data: apps
        });
    });
};


exports.genUserApplication = function (req, res, next) {

    var appName = req.body.appName;

    var userId = req.user.id;

    userApplication.findUserAppAgentAccount(userId, appName, function (err, app) {
        if (err) {
            return next(err);
        }

        if(app){
            return res.json({
                code : 0,
                msg : 'AppName has been used !'
            });
        }

        res.json({
            code : 0,
            data : {
                appKey : hash(Date.now() + appName + userId, 'md5'),
                appSecret: hash(Date.now() + appName + userId, 'sha1')
            }
        });

    });

};


exports.saveUserApplication = function (req, res, next) {

    var userId = req.user.id;
    var appName = req.body.appName;
    var appKey = req.body.appKey;
    var appSecret = req.body.appSecret;

    userApplication.createUserAppAgentAccount(userId, {
        appName : appName,
        appKey : appKey,
        appSecret : appSecret
    }, function (err, effect) {
        if (err) {
            return next(err);
        }

        if(!effect){
            res.json({
                code : 0,
                msg : 'App Account Save Failed!'
            });
        }

        res.json({code : 0});

    });
};