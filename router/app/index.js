/**
 * Created by synder on 16/4/27.
 */
var Router = require('xpress').Router;
var appRouter = new Router();

var app = require('../../controller/app/index');

appRouter.get('/summary', app.summary);
appRouter.get('/url', app.url);


module.exports = appRouter;