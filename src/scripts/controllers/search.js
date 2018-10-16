import searchTpl from '../views/search.html';
import searchModel from '../models/search';

const render = async () => {
    //  获取搜索数据
    let data = await searchModel.getData();
    let list = data.data.items;
    let template = Handlebars.compile(searchTpl);
    let html = template({ list });
    // 渲染搜索页
    $("#root").html(html);
}
export default {
    render
}