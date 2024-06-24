//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入vue-resource插件
import vueResource from 'vue-resource'
//关闭Vue生产提示
Vue.config.productionTip = false
//使用插件
Vue.use(vueResource)  //使用后vc里多了$http

//创建vm
new Vue({
    el:'#app',
    render:h => h(App),
    beforeCreate(){
        Vue.prototype.$bus = this
    }
})