/**
 * Created by synder on 16/4/27.
 */
var Router = require('xpress').Router;
var appRouter = new Router();

var summary = require('../../controller/app/summary');
var urlTrans = require('../../controller/app/urlTrans');

appRouter.get('/app/summary', summary.page);
appRouter.get('/app/url/trans', urlTrans.page);

module.exports = appRouter;