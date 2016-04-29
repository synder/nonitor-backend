/**
 * @author synder
 * @date 16/1/10
 * @desc
 */

var path = require('path');

var projectPath = process.cwd();

module.exports =  {

    project:{
        path : projectPath
    },

    /**
     * 服务器的配置
     * server.port.http  http监听端口,如果不提供则不监听
     * server.port.https https监听端口,如果不提供则不监听，如果两个都提供，两个都监听
     * server.host 绑定的host
     * server.proxy 信任的代理
     * server.key 使用https的时候提供的秘钥
     * server.cert 使用https的时候提供的公钥
     * */
    server: {
        port: {
            http: 8002,
            https: null
        },
        host: null,
        proxy: {
            trust: true
        },
        key: null,
        cert: null,
        cluster: false
    },


    /**
     * 日志配置 debug -> trace -> info -> warn -> error -> fatal
     * log.type : {String} 配置类型 'console' || 'console&file&mongodb&email'
     * log.file : {Object} 文件日志配置
     * log.console : {Object} 输出日志配置
     * log.mongodb : {Object} mongodb日志配置
     * log.email : {Object} 邮件日志配置
     * */
    log: {
        type: 'console & file',    //file console mongodb email
        file: {
            level: 'info',
            path: path.join(projectPath, 'logs'),
            maxsize: 1024 * 1024 * 20,
            filename: 'error.log'
        },
        console: {
            level: 'info'
        },
        mongodb: {
            level: 'error',
            host: '127.0.0.1',
            port: 27017,
            username: '',
            password: '',
            capped: true,
            maxsize: 1024 * 1024 * 1024 * 5,
            database: 'log',
            collection: 'sys_log'
        },
        email: {
            level: 'fatal',
            to: '812256717@qq.com',
            from: 'yuwei291@1caifu.com',
            host: 'smtp.exmail.qq.com',
            port: 465,
            username: '*@1caifu.com',
            password: '*',
            ssl: true
        }
    },


    /**
     * 数据库配置
     * */
    database: {
        /***
         * mysql 配置文件
         * */
        mongodb: {
            uri:'mongodb://localhost/monitor',
            pool: 5,
            password : null,
            user: null
        },
        redis : {
            host : '127.0.0.1',
            port : 6379,
            db : 0,
            auth:{
                password: null
            }

        }
    }
};
