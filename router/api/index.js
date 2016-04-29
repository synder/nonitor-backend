/**
 * @author synder
 * @date 16/1/10
 * @desc
 */
var Router = require('xpress').Router;
var apiRouter = new Router();
//----------------------------------------------------------------
var userAccount = require('../../controller/api/userAccount');


apiRouter.post('/user/login', userAccount.login);
apiRouter.post('/user/register', userAccount.register);

//----------------------------------------------------------------
var appTransStat = require('../../controller/api/appTransStat');
var appNodesInfo = require('../../controller/api/appNodesInfo');
var appEventInfo = require('../../controller/api/appEventInfo');
var transException = require('../../controller/api/transException');
var appUrlTransInfo = require('../../controller/api/appUrlTransInfo');

apiRouter.get('/app/web/urls/trans', appTransStat.statistics);
apiRouter.get('/app/web/url/trans', appUrlTransInfo.statistics);

apiRouter.get('/app/web/trans/exception/error', transException.error);
apiRouter.get('/app/web/trans/exception/timeout', transException.timeout);
apiRouter.get('/app/web/trans/exception/warn', transException.warn);

apiRouter.get('/app/nodes/system/info', appNodesInfo.nodesInfo);

apiRouter.get('/app/nodes/event/start', appEventInfo.start);
apiRouter.get('/app/nodes/event/stop', appEventInfo.stop);
apiRouter.get('/app/nodes/event/error', appEventInfo.error);
apiRouter.get('/app/nodes/event/crash', appEventInfo.crash);

//----------------------------------------------------------------
var userAppInfo = require('../../controller/api/userAppInfo');

apiRouter.get('/user/apps', userAppInfo.listUserApplications);
apiRouter.put('/user/app/gen', userAppInfo.genUserApplication);
apiRouter.put('/user/app/save', userAppInfo.saveUserApplication);

module.exports = apiRouter;