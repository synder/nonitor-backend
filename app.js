/**
 * @author synder
 * @date 16/1/10
 * @desc
 */
var ejs = require('ejs');
var io = require('socket.io');
var Xpress = require('xpress');
var config = require('./config');

global.config = config;

//---------------------------------------------------------
var server = new Xpress({
    host: config.private.server.host,
    key: config.private.server.key,
    cert: config.private.server.cert,
    port: {
        http: config.private.server.port.http,
        https: config.private.server.port.https
    }
});

//---------------------------------------------------------
server.conf('x-powered-by', false);
server.conf('trust proxy', true);
server.conf('views', config.public.server.view.path);
server.conf('view engine', config.public.server.view.engine);
server.conf('view cache', false);
server.engine('html', ejs.__express);


//---------------------------------------------------------

exports.socketServer = io(server.httpServer);

//---------------------------------------------------------
var body = require('body-parser');
var cookie = require('cookie-parser');
var timeout = require('connect-timeout');
var compression = require("compression");
var statics = require('express-static');

server.use(compression());
server.use(timeout('20s'));
server.use(cookie());
server.use(body.json());
server.use(body.urlencoded({extended: true}));
server.use(statics(config.public.server.statics.path));


//---------------------------------------------------------

var appRouter = require('./router/app');
var homeRouter = require('./router/home');
var accountRouter = require('./router/account');
var statisticsRouter = require('./router/statistics');

server.sub('/', homeRouter);
server.sub('/app', appRouter);
server.sub('/statistics', statisticsRouter);
server.sub('/account', accountRouter);

//---------------------------------------------------------

server.error(404, function (err, req, res, next) {
    res.status(404).send('not found');
});

server.error(500, function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('server error');
});

//---------------------------------------------------------
server.listen(function (message) {
    console.log(message);
});

//---------------------------------------------------------
module.exports = server;
