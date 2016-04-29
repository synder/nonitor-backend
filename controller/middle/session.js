/**
 * Created by synder on 16/4/29.
 */


var userSession = require('../../model/userSession');

exports.load = function () {

    return function (req, res, next) {

        var key = req.cookies.session;

        if(!key){
            req.user = null;
            return next();
        }

        userSession.findSession(key, function (err, user) {

            req.user = user;

            userSession.expireSession(key, 600000);

            next();
        });

    };
};

exports.check = function () {

    return function (req, res, next) {

        if(req.user){
            return next();
        }

        if(req.url === '/user/login'){
            return next();
        }

        if(req.url === '/api/user/login'){
            return next();
        }

        res.redirect('/user/login');

    };
};