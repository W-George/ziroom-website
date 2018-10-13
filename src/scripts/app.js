import homeController from"./controllers/home";
import Router from './utils/router';

// 实例化路由
let router = new Router();
router.init();
// 注册路由
/* 
    首页路由：#home,homeController.render
*/
router.route('#home',homeController.render);