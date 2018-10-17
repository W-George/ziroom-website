import searchTpl from '../views/search.html';
import searchListTpl from '../views/search-list.html';
import searchModel from '../models/search';

const render = async () => {
    //  获取热门搜索数据
    let data = await searchModel.getData();
    let list = data.data.items;
    let template = Handlebars.compile(searchTpl);
    let html = template({ list });
    // 渲染搜索页
    $("#root").html(html);
    // 监听输入框
    inputListener();
}

// 搜索栏监听输入事件
const inputListener = () => {
    // 防抖函数优化性能
    let timer = null;

    $('.userinput').on('input', () => {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout( async () => {
            // 查询实时输入数据
            let data = await searchModel.getData($('.userinput').val());
            // 结果不为空时
            if (data.data.num != 0) {
                let list = data.data.items;
                let template = Handlebars.compile(searchListTpl);
                let html = template({ list });
                // 渲染数据，显示搜索提示框
                $('.searchtips').html(html).css('display', 'block').next().css('display', 'none');
                $('footer').css('display', 'none');
            }
            // 隐藏搜索提示框
            if (data.status == 'failure') {
                $('.searchtips').css('display', 'none').next().css('display', 'block');
                $('footer').css('display', 'block');
            }
        }, 1000);
    })
}
export default {
    render
}