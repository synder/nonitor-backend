/**
 * Created by synder on 16/4/21.
 */

var appWebUrlsTrans = require('../../model/appWebUrlsTrans');

/**
 * @desc 返回一天内的web统计数据
 * */
exports.statistics = function(req, res, next){

    var now = new Date();
    var app = '572330c8209211910794a374';

    appWebUrlsTrans.statisticsOneDayWebTransaction(app, now, function (err, rows) {
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