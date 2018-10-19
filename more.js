import moreTpl from '../views/more.html';
import morelistTpl from '../views/more-list.html';
import moreModel from '../models/more';

const render = () => {
    // 渲染页面
    $("#root").html(moreTpl);
    // 动态渲染数据
    renderData();
    // 滚动
    // scroll();

}

// 动态渲染数据
const renderData = async () => {
        let result = await moreModel.data();
        let list = result.data.rooms;
        let template = Handlebars.compile(morelistTpl)
        let html = template({
            list
        })
        $('.main').html(html)  
}

// 滚动
// const scroll = () => {
//     let posScroll = new BScroll(".scroll", {
//         probeType: 2,
//     })

//     // 最大滚动
//     posScroll.on = ('scroll',function() {
//         // let maxY = this.maxScrollY;
//         // console.log(maxY)
//         let y = this.y
//         console.log(y)
//         // alert(56)
//     })
// }



export default {
    render
}