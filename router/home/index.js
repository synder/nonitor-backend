/**
 * @author synder
 * @date 16/1/10
 * @desc
 */
var Router = require('xpress').Router;
var homeRouter = new Router();

var index = require('../../controller/home/index');

homeRouter.get('/', index.page);

module.exports = homeRouter;