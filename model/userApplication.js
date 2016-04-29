/**
 * Created by synder on 16/4/29.
 */


var conn = require('../database/monitor').conn;

var AppAgentAccount = conn.model('AppAgentAccount');


exports.findAllUserAppAgentAccount = function (user, callback) {
    AppAgentAccount.find({user: user}).sort({ctime:-1}).exec(callback);
};

exports.findUserAppAgentAccount = function (user, appname, callback) {
    AppAgentAccount.findOne({user: user, name: appname}, callback);
};

exports.createUserAppAgentAccount = function (user, info, callback) {
    var account = {
        user       : user,
        name       : info.appName,
        key        : info.appKey,
        secret     : info.appSecret,
        status     : AppAgentAccount.STATUS.NORMAL,
        ctime      : new Date(),
        mtime      : new Date()
    };
    AppAgentAccount.create(account, callback);
};