/**
 * Created by synder on 16/4/29.
 */

var conn = require('../database/session').conn;

exports.saveSession = function (key, info, ttl, callback) {
    conn.hmset(key, info, callback);
    conn.expire(key, ttl);
};

exports.expireSession = function (key, ttl, callback) {
    conn.expire(key, ttl, callback);
};

exports.findSession = function (key, callback) {
    conn.hgetall(key, callback);
};

exports.removeSession = function (key, callback) {
    conn.del(key, callback);
};