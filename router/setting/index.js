/**
 * Created by synder on 16/4/27.
 */
var Router = require('xpress').Router;
var settingRouter = new Router();

var application = require('../../controller/setting/application');

settingRouter.get('/setting/application', application.page);

module.exports = settingRouter;