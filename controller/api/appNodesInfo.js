/**
 * Created by synder on 16/4/27.
 */

var appNodeSystemInfo = require('../../model/appNodeSystemInfo');


exports.nodesInfo = function (req, res, next) {

    var app = '5723296eb1f738b90649ee63';

    appNodeSystemInfo.getAppNodesSystemInfo(app, function (err, nodes) {
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