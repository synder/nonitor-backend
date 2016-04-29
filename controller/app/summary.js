/**
 * Created by synder on 16/4/29.
 */


/**
 * app summary
 * */
exports.page = function (req, res, next) {

    var app = req.query.app;

    res.render('app/summary', {
        appId : app
    });
};
