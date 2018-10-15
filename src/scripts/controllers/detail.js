import detailTpl from '../views/detail.html'
import detailModel from '../models/detail'
// import Swiper from 'swiper'

var mySwiper
var c=0;
const render = async () => {
    let result = await detailModel.list()
    let list = result.data
    console.log(list)
    for (let i of list.price[1]) {
        list['priceArr'] = list.priceArr || [];
        list.priceArr.push({
            pos: '-' + (0.264 * i) + 'rem',
            bgc: list.price[0]
        })
    }
    let template = Handlebars.compile(detailTpl)
    let html = template({
        list
    })
    $('#root').html(html)


    swiper();
    change();
    changeConfig();
}
const swiper = function(){
    mySwiper = new Swiper('.swiper-container', {
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },
        on: {
            slideChangeTransitionEnd: function () {
                let index = this.activeIndex - 1
                if (index == 4) {
                    index = 0;
                }
                $('.swiper-name span').eq(index).addClass('active').siblings().removeClass('active')

            }
        }
    })
}
const change = function () {
    $('.swiper-name span').on('tap', function () {
        mySwiper.slideTo($(this).index() + 1)
    })
}
const changeConfig = function(){
    $('.tab-wrapper span').eq(0).addClass('act');

    $('.tab-wrapper span').on('tap',function(){
        $(this).addClass('act').siblings().removeClass('act')
        var c=$(this).text()
        // 点击上面的切换下面的
        $('.config-icons').html()
    })
}

export default {
    render
}