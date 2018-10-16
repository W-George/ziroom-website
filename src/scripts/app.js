import homeController from"./controllers/home";
import Router from './utils/router';
import searchController from './controllers/search';
import ziruServer from './controllers/ziru-server';
import detailController from "./controllers/detail";
import repairController from "./controllers/repair";
import moreController from "./controllers/more";

// 实例化路由
let router = new Router();
router.init();
// 注册路由
/* 
    首页路由：#home,homeController.render
    搜索页路由：#search,searchController.render
    自如服务路由：#ziruServer,ziruServer.render
    详情页路由：#detail,detailController.render
    自如维修路由：#repair,repairController.render
    列表页：#more,moreController.render
*/
router.route('#home',homeController.render);
router.route('#search',searchController.render);
router.route('#ziruServer',ziruServer.render);
router.route('#detail',detailController.render);
router.route('#repair',repairController.render);
router.route('#more',moreController.render);
