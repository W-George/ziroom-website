function Router() {
    this.routes = {};
    this.currentHash = '';
    this.noop = function () { }
}

// 注册路由
Router.prototype.route = function (hash, render) {
    this.currentHash = hash;
    this.routes[this.currentHash] = render || this.noop;
}

// 路由刷新
Router.prototype.refresh = function () {
    let hash = location.hash || "#home";
    this.currentHash = hash;
    // 调用该路由对应的回调函数
    this.routes[this.currentHash]();
}

// 监听路由
Router.prototype.init = function(){
    window.addEventListener('load',this.refresh.bind(this));
    window.addEventListener('hashchange',this.refresh.bind(this));
}


export default Router;
