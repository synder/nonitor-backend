/**
 * Created by synder on 16/4/27.
 */

var statisticsSystem = require('../../model/statistics/system');


exports.nodesInfo = function (req, res, next) {

    var app = 'key';

    statisticsSystem.getAppNodesSystemInfo(app, function (err, nodes) {
        if(err){
            return next(err);
        }

        res.json({
            code : 0,
            msg : null,
            data: nodes
        });
    });
};