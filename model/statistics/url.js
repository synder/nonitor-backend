/**
 * Created by synder on 16/4/28.
 */


var conn = require('../../database/monitor').conn;

var AppNodeWebTransInfo = conn.model('AppNodeWebTransInfo');

exports.getUrlTransactions = function (app, url, method, callback) {
    AppNodeWebTransInfo.find({
        app : app,
        url : url,
        method : method
    }).limit(5).exec(callback);
};