/**
 * Created by synder on 16/4/28.
 */


var statisticsUrl = require('../../model/statistics/url');


exports.transactions = function (req, res, next) {

    var app = 'key';
    var url = '/';
    var method = 'GET';

    statisticsUrl.getUrlTransactions(app, url, method, function (err, trans) {
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