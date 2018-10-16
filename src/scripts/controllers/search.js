import searchTpl from '../views/search.html';

const render = () => {
     // 渲染搜索页
     $("#root").html(searchTpl);
}
export default {
    render
}