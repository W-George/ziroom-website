import homeTpl from '../views/home.html';
import homeContentTpl from '../views/home.html';
// import homeContentModel from '../models/home-content';


const render = () => {
    $("#root").html(homeTpl);
    // homeContentModel.getBanner();
}

export default {
    render
}