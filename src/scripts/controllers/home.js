
const homeTpl = require('../views/home.html');

console.log("homeTpl");
const rendel = function(){
    document.querySelector("#root").innerHTML = homeTpl;
}

module.exports = {
    rendel
}