/**
 * Created by synder on 16/4/29.
 */


var conn = require('../database/monitor').conn;

var UserAccount = conn.model('UserAccount');


exports.findUserAccount = function (username, callback) {
    UserAccount.findOne({username : username}, callback);
};


exports.createUserAccount = function (username, password, callback) {
    var userAccount = {
        username   : username,
        password   : password,
        nickname   : username,
        gender     : UserAccount.GENDER.UNKNOWN,
        status     : UserAccount.STATUS.NORMAL,
        ctime      : new Date(),
        mtime      : new Date()
    };
    console.log(userAccount);
    UserAccount.create(userAccount, callback);
};

exports.updateUserPassword = function (username, password, callback) {

    var condition = {username : username};
    var update = { password : password};

    UserAccount.update(condition, update, callback);
};