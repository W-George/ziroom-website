function Router() {
    this.routes = {};
    // 这是一个对象，对象里两个属性1：路由，2：路由发送变化时执行的回调函数
    this.currentHash = '';
    this.noop = function () { }
}

// 注册路由
Router.prototype.route = function (hash, render) {
    this.currentHash = hash;

    this.routes[this.currentHash] = render || this.noop;
    // this.routes[this.currentHash] 当前这个对象，里面路由的哈希值[]变量，
    // 然后对象[key]=value,value值被写成回调函数render了
}

// 路由刷新

Router.prototype.refresh = function () {

    let hash = location.hash || '#home'
    // var url=location.href.split('?')[1];
    // // console.log(location.href.split('?')[1])

    // this.currentHash = hash+'?'+url
    this.routes[this.currentHash]()
  }

  
// 监听路由
Router.prototype.init = function(){
    window.addEventListener('load',this.refresh.bind(this));
    window.addEventListener('hashchange',this.refresh.bind(this));
}


export default Router;