//main.js中配置
new Vue({
    el: '#root',
    render: h => h(App),
    beforeCreat() {
        Vue.prototype.$bus = this //使所有组件实例可以访问到$bus
    }
})