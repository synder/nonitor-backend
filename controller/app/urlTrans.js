/**
 * Created by synder on 16/4/29.
 */


/**
 * */
exports.page = function (req, res, next) {
    var app = req.query.app;
    var url = req.query.url || '/';
    var method = req.query.method || 'GET';

    res.render('app/url_trans', {
        appId: app,
        url : url,
        method : method
    });
};