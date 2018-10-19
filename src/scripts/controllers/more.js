import moreTpl from '../views/more.html';
import moreModel from '../models/more';
let dataId=[],id=0;
const render = async () => {
    let result = await moreModel.data();
    let list = result.data.rooms;
    // for(let i of list){
    //     id=Number(i['id'])
    //     dataId.push(id)
    // }
    let template = Handlebars.compile(moreTpl)
    let html = template({
        list
    })

    $('#root').html(html)

    scroll();
    // click()

//    console.log($('.tiao').attr('href'))
}

const scroll =()=>{
    let posScroll =  new BScroll(".main",{
        probeType:2,
    })
}
const click=()=>{
    $('.item').on('tap',function(){ 
    // location.href='#detail?id='+$(this).attr('data-id')
    console.log($(this).children().eq(0).attr('href'))
    // $('.tiao').attr('href','#detail'+$(this).attr("data-id"))
    })
}

export default {
    render
}