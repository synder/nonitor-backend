/**
 * Created by synder on 16/4/27.
 */
var conn = require('../../database/monitor').conn;

var AppNodeSystemInfo = conn.model('AppNodeSystemInfo');


exports.getAppNodesSystemInfo = function (app, callback) {
    AppNodeSystemInfo.find({app: app}, callback);
};
