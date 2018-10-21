import moreTpl from '../views/more.html';
import morelistTpl from '../views/more-list.html';
import moreModel from '../models/more';

var datasource = []
var pageNo = 1;

const render = async () => {
    // 渲染页面
    $("#root").html(moreTpl);
    let list = (await moreModel.data()).data.rooms;
    console.log(list);
    // 动态渲染数据
    await renderData(list);
    // 滚动
    scroll();
    // 鼠标滑过
    move()
    // 滚动附近
    scrollFj()
    
    mousenter()

}

// 动态渲染数据
const renderData = async (list) => {

    let template = Handlebars.compile(morelistTpl)
    let html = template({
        list
    })
    $('.main').html(html)
}

// 滚动list
const scroll = async () => {
    let posScroll = new BScroll(".scroll", {
        probeType: 2
    })


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
                ...result.data.rooms
              ];
            renderData(list);
              console.log(list)
            this.refresh()
            this.scrollTo(0, this.maxScrollY + 40)

        }
    })

}

// 鼠标滑过ul
const move = function(){
    let flag = true;

    $('.nav li').eq(0).addClass('act')

    let indexA = 0;

    $('.nav li').on('tap',function(){
        // alert()
        var index=$(this).index()
        // console.log(index)
        if(indexA == index){

            if(flag){
                
                $(this).addClass('act').siblings().removeClass('act')
                // 点击上面的切换下面的
                $('.filter-hov').eq(index).css('display','block').siblings().css('display','none');
        
                flag = false;
        
                }else{
        
                    flag = true;
        
                    $('.filter-hov').eq(index).css('display','none')
                }
        }else{
            $(this).addClass('act').siblings().removeClass('act')
            // 点击上面的切换下面的
            $('.filter-hov').eq(index).css('display','block').siblings().css('display','none');
        }
       

       indexA = index;
    })
}

// 滚动附近
const scrollFj = async () => {
    let posScroll = new BScroll(".weiz-right", {
        probeType: 2
    })
}

const mousenter = function(){
    $('.weiz_right_p p').on('tap',function(){
        // console.log($(this).index())
        $(this).css("color","#ffa000").siblings().css("color","")
    })

    $('.weiz-left-div').on("tap",function(){
        $(this).css("color","#ffa000").siblings().css("color","")
    })
}
export default {
    render
}
