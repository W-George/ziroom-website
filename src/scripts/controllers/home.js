import homeTpl from '../views/home.html';
import homeContentTpl from '../views/home-content.html';
import homeContentModel from '../models/home-content';


const render = () => {
    // 渲染首页
    $("#root").html(homeTpl);
    
    // 首页轮播图
    let mySwiper = new Swiper('.swiper-container', {
        autoplay: true,//可选选项，自动滑动
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
    });
    renderData();
}

// 动态渲染数据
const renderData = async () => {
    let result = await homeContentModel.getData();
    let data = JSON.parse(result).data;
    let template = Handlebars.compile(homeContentTpl);
    let html = template({ data });
    $('.contents').html(html);
}

export default {
    render
}