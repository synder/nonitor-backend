/**
 * @author synder
 * @date 16/1/10
 * @desc
 */
var Router = require('xpress').Router;
var statisticsRouter = new Router();

var web = require('../../controller/statistics/web');
var system = require('../../controller/statistics/system');
var event = require('../../controller/statistics/event');
var exception = require('../../controller/statistics/exception');
var url = require('../../controller/statistics/url');

statisticsRouter.get('/web/transaction', web.transaction);

statisticsRouter.get('/web/transaction/error', exception.error);
statisticsRouter.get('/web/transaction/timeout', exception.timeout);
statisticsRouter.get('/web/transaction/warn', exception.warn);

statisticsRouter.get('/app/nodes/system/info', system.nodesInfo);

statisticsRouter.get('/event/start', event.start);
statisticsRouter.get('/event/stop', event.stop);
statisticsRouter.get('/event/error', event.error);
statisticsRouter.get('/event/crash', event.crash);

statisticsRouter.get('/url/transactions', url.transactions);


module.exports = statisticsRouter;