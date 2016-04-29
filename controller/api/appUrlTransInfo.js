/**
 * Created by synder on 16/4/28.
 */


var appWebUrlTrans = require('../../model/appWebUrlTrans');


exports.statistics = function (req, res, next) {

    var app = req.query.app;
    var url = req.query.url;
    var method = req.query.method;

    appWebUrlTrans.getUrlTransactions(app, url, method, function (err, trans) {
        if(err){
            return next(err);
        }

        res.json({
            code : 0,
            msg : null,
            data: trans
        });
    });

};