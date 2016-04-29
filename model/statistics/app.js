/**
 * Created by synder on 16/4/29.
 */


var conn = require('../../database/monitor').conn;

var AppAgentAccount = conn.model('AppAgentAccount');

exports.getUserApplications = function (user, callback) {
    
};