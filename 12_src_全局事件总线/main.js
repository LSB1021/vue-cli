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

        /* Vue2中的全局事件总线和Vuex在功能上虽然有一定的相似之处，
        但它们的实现方式、用途和适用场景存在显著差异。
        开发者在选择使用哪种方式时，应根据应用的具体需求和复杂度来权衡利弊。
        对于小型应用或简单的状态传递需求，全局事件总线可能是一个更好的选择；
        而对于大型应用或复杂的状态管理需求，Vuex则提供了更强大和灵活的功能。 */
    }
})
