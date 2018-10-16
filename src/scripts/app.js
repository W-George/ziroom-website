import homeController from"./controllers/home";
import Router from './utils/router';
import ziruServer from './controllers/ziru-server';
import detailController from "./controllers/detail";
<<<<<<< HEAD
import moreController from "./controllers/more";
=======
import repairController from "./controllers/repair";
>>>>>>> master

// 实例化路由
let router = new Router();
router.init();
// 注册路由
/* 
    首页路由：#home,homeController.render
    自如服务路由：#ziruServer,ziruServer.render
    详情页路由：#detail,detailController.render
    自如维修路由：#repair,repairController.render
*/
router.route('#home',homeController.render);
router.route('#ziruServer',ziruServer.render);
router.route('#detail',detailController.render);
<<<<<<< HEAD
router.route('#more',moreController.render);
=======
router.route('#repair',repairController.render);
>>>>>>> master
