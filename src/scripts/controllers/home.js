import homeTpl from '../views/home.html'


const render = () => {
    $("#root").html(homeTpl);
}

export default {
    render
}