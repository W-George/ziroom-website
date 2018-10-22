import homeTpl from '../views/home.html';
import homeContentTpl from '../views/home-content.html';
import homeContentModel from '../models/home-content';
import moreTpl from '../views/more.html';

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
    // 当前城市
    let currentCity = '北京';
    // 渲染数据
    renderData();
    // 选择城市
    selectCity();
    // 弹出菜单
    showMenu();
    // 跳转至搜索
    jumpToSearch();
}

// 动态渲染数据
const renderData = async () => {
    let result = await homeContentModel.getData();
    let data = JSON.parse(result).data;
    let template = Handlebars.compile(homeContentTpl);
    let html = template({ data });
    $('.contents').html(html);
}

// 城市选择事件
const selectCity = () => {
    // 点击城市
    $('.selectcity').on('tap', () => {
        // 隐藏主题内容，显示城市列表
        $('.mainbox').css('display', 'none');
        $('.citybox').css('display', 'block');
    });
    // 点击返回主页面
    $('.returnmainbox').on('tap', () => {
        $('.citybox').css('display', 'none');
        $('.mainbox').css('display', 'block');
    });
    // 选择城市
    $('.citylist').on('tap', (e) => {
        $('.selectcity').text($(e.target).text());
        $('.citybox').css('display', 'none');
        $('.mainbox').css('display', 'block');
    })
    // 选择当前定位城市
    $('.currentcitybox').on('tap', (e) => {
        $('.selectcity').text($(e.target).text());
        $('.citybox').css('display', 'none');
        $('.mainbox').css('display', 'block');
    })
}

// 点击菜单
const showMenu = () => {
    // 点击图标
    $('.showMenu').on('tap', () => {
        // 显示菜单
        $('.menubox').css('display', 'block');
    });
    // 给菜单绑定事件
    $('.menubox').on('tap', (e) => {
        let target = e.target;
        // 点击空白区域隐藏菜单
        if (target.tagName == "DIV") {
            // 隐藏菜单
            $('.menubox').css('display', 'none');
        }

        // 点击菜单栏
        // 登录
        if (target.className == "login") {
            location.hash = '#login';
        }
        // 首页
        if (target.className == "home") {
            location.hash = '#home';
        }
        // 自如找房
        if (target.className == "more") {
            location.hash = '#more';
        }
    });
}

// 跳转搜索页面
const jumpToSearch = () => {
    $('.search').on('tap', () => {
        location.hash = '#search';
    })
}

export default {
    render
}