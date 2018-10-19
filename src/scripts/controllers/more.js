import moreTpl from '../views/more.html';
import morelistTpl from '../views/more-list.html';
import moreModel from '../models/more';

var datasource = []
var pageNo = 1;

const render = async () => {
    // 渲染页面
    $("#root").html(moreTpl);
    // 动态渲染数据
    renderData();
    // 滚动
    scroll();

}

// 动态渲染数据
const renderData = async () => {
    let result = await moreModel.data();
    let list=datasource = result.data.rooms;
    let template = Handlebars.compile(morelistTpl)
    let html = template({
        list
    })
    $('.main').html(html)
}

// 滚动
const scroll = async () => {
    let posScroll = new BScroll(".scroll", {
        probeType: 2
    })

    // 最大滚动
    // 监听滚动条滚动的实时位置
    posScroll.on('scrollEnd', async function () {
        let y = this.y,
            maxY = this.maxScrollY - y;
        if (maxY >= -40 && maxY < 0) {
            this.scrollTop = (0,this.maxScrollY+40)
        } else if (maxY >= 0) {
            // 下拉刷新加载数据
            let result = await moreModel.load(++pageNo);
            let list = datasource = [
                ...datasource,
                ...result.data.rooms,
              ]
            //   console.log(list)
            this.refresh()
            this.scrollTo(0, this.maxScrollY + 40)

        }
    })
}



export default {
    render
}