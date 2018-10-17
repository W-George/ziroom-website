import moreTpl from '../views/more.html';
import moreModel from '../models/more';

const render = async () => {
    let result = await moreModel.data();
    let list = result.data.rooms;

    let template = Handlebars.compile(moreTpl)
    let html = template({
        list
    })
       
    $('#root').html(html)

    scroll();
    bgImg();
   
}

const scroll =()=>{
    let posScroll =  new BScroll(".main",{
        probeType:2,
        scrollY:-40,
    })

}


export default {
    render
}