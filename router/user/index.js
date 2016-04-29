/**
 * @author synder
 * @date 16/1/10
 * @desc
 */
var Router = require('xpress').Router;
var userRouter = new Router();

var userAccount = require('../../controller/user/account');
var userApplication = require('../../controller/user/application');


userRouter.get('/', userApplication.page);

userRouter.get('/user/register', userAccount.register);
userRouter.get('/user/password', userAccount.password);
userRouter.get('/user/login', userAccount.login);
userRouter.get('/user/logout', userAccount.logout);


module.exports = userRouter;