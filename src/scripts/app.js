import homeController from"./controllers/home";
import detailController from"./controllers/detail";

homeController.render();
// detailController.render();
import Router from './utils/router';
import ziruServer from './controllers/ziru-server';
import detail from './controllers/detail'

// 实例化路由
let router = new Router();
router.init();
// 注册路由
/* 
    首页路由：#home,homeController.render
    详情页路由：#detail',detailController.render
*/
router.route('#home',homeController.render);
router.route('#ziruServer',ziruServer.render);
router.route('#detail',detailController.render);