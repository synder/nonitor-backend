/**
 * Created by synder on 16/4/25.
 */

exports.login = function (req, res, next) {
    res.render('user/landing');
};

exports.password = function (req, res, next) {
    res.render('user/password');
};

exports.register = function (req, res, next) {
    res.render('user/register');
};