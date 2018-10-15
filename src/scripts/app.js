import homeController from"./controllers/home";
import Router from './utils/router';
import ziruServer from './controllers/ziru-server';
import detailController from "./controllers/detail";

// 实例化路由
let router = new Router();
router.init();
// 注册路由
/* 
    首页路由：#home,homeController.render
    自如服务：#ziruServer,ziruServer.render
    详情页路由：#detail,detailController.render
*/
router.route('#home',homeController.render);
router.route('#ziruServer',ziruServer.render);
router.route('#detail',detailController.render);
