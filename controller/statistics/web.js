/**
 * Created by synder on 16/4/21.
 */

var statisticsWeb = require('../../model/statistics/web');

/**
 * @desc 返回一天内的web统计数据
 * */
exports.transaction = function(req, res, next){

    var now = new Date();
    var app = 'key';

    statisticsWeb.statisticsOneDayWebTransaction(app, now, function (err, rows) {
        if(err){
            return next(err);
        }

        res.json({
            code : 0,
            msg : null,
            data : rows
        });
    });

};