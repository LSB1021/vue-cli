//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//关闭Vue生产提示
Vue.config.productionTip = false

//创建vm
new Vue({
    el:'#app',
    render:h => h(App),
    beforeCreate(){
        Vue.prototype.$bus = this //安装全局事件总线  自定义的$bus总线
        //对象的隐式原型的值为其对应构造函数的显式原型的值
    }
})
