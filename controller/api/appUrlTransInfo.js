/**
 * Created by synder on 16/4/28.
 */


var appWebUrlTrans = require('../../model/appWebUrlTrans');


exports.statistics = function (req, res, next) {

    var app = '5723296eb1f738b90649ee63';
    var url = '/';
    var method = 'GET';

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