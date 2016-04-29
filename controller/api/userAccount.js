/**
 * Created by synder on 16/4/29.
 */

var crypto = require('crypto');

var userSession = require('../../model/userSession');
var userAccount = require('../../model/userAccount');

var hash = function (content) {
    return crypto.createHash('md5').update(content).digest('hex')
};

exports.register = function (req, res, next) {

    var username = req.body.username;
    var password = req.body.password;

    userAccount.findUserAccount(username, function (err, user) {
        if(err){
            return next(err);
        }

        if(user){
            return res.json({
                code: 1,
                msg : 'Email or Phone has been Registered'
            });
        }

        userAccount.createUserAccount(username, password, function (err, info) {
            if(err){
                return next(err);
            }

            res.json({
                code : 0,
                data : info
            });
        });
    });

};


exports.login = function (req, res, next) {

    var username = req.body.username;
    var password = req.body.password;

    userAccount.findUserAccount(username, function (err, user) {

        if(err){
            return next(err);
        }

        if(!user){
            return res.json({
                code: 1,
                msg : 'Account Nonexistence'
            });
        }

        if(user.password !== password){
            return res.json({
                code: 1,
                msg : 'Password Wrong'
            });
        }

        var key = hash(user._id.toString() + Date.now());

        userSession.saveSession(key, {
            id : user._id.toString(),
            username : user.username,
            nickname : user.nickname,
            gender : user.gender,
            status: user.status
        }, 600000, function (err) {

            if(err){
                return next(err);
            }

            res.cookie('session', key, { path: '/', httpOnly: true });

            res.json({
                code : 0,
                data : user
            });
        });


    });
};

exports.logout = function (req, res, next) {
    var key = req.cookies.session;
    userSession.removeSession(key, function () {
        res.clearCookie('session', { path: '/' });
        res.redirect('/user/login');
    });
};


exports.password = function (req, res, next) {

};



