import homeTpl from '../views/home.html';
import homeContentTpl from '../views/home.html';
import homeContentModel from '../models/home-content';


const render = () => {
    $("#root").html(homeTpl);
    // homeContentModel.getBanner();
    
    // 首页轮播图
    let mySwiper = new Swiper('.swiper-container', {
        autoplay: true,//可选选项，自动滑动
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
    })
    // 动态渲染数据
    homeContentModel.getBanner();
}

export default {
    render
}