/**
 * Created by synder on 16/4/29.
 */


var redis = require('redis');

var config = require('../../config');

var redisConfig = config.private.database.redis;

var conn = redis.createClient(
    redisConfig.port,
    redisConfig.host,
    {
        auth_pass : redisConfig.auth.password
    }
);

conn.on('error', function(err){
    console.error(err);
});

conn.on('connect', function(){
    conn.select(redisConfig.db);
});

exports.conn = conn;
