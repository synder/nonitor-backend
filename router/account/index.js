/**
 * @author synder
 * @date 16/1/10
 * @desc
 */
var Router = require('xpress').Router;
var accountRouter = new Router();

var account = require('../../controller/account/index');

accountRouter.get('/login', account.loginPage);
accountRouter.post('/login', account.login);

accountRouter.get('/password', account.passwordPage);
accountRouter.post('/password', account.password);

accountRouter.get('/logout', account.logout);


module.exports = accountRouter;