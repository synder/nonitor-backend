/**
 * Created by synder on 16/4/27.
 */

var appNodeSystemInfo = require('../../model/appNodeSystemInfo');


exports.nodesInfo = function (req, res, next) {

    var app = req.query.app;

    if(!app){
        return res.json({
            code : 0,
            msg : null,
            data : []
        });
    }

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