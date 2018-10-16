import repairTpl from '../views/repair.html';
import repairModels from '../models/repair';
import repairList from '../views/repari-list.html';

const render = () => {
    $("#root").html(repairTpl);
    click();
}

const click =  () => {
    $(".leftUl li").on('tap',async function(){  
        $(this).addClass("active").siblings().removeClass("active"); 
        let liId = $(this).attr("data-id");
        let list = (await repairModels.list(liId)).data;
       
        renderlist(list);     
    })
}

const renderlist = (list) => {
    let template = Handlebars.compile(repairList)
    let html = template({ list })
    $('.rightUl').html(html);
}
export default {
    render
}