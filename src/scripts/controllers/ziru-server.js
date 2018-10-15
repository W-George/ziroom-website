import ziruServerTpl from '../views/ziru-server.html';

const render = () => {
    $("#root").html(ziruServerTpl);
    let mySwiper = new Swiper('.swiper-container', {
        autoplay: true,//可选选项，自动滑动
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
    });
}

export default {
    render
}