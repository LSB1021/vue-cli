//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'

//全局引用混合
/* import { mixin,mixin2 } from './components/mixin' */

//关闭Vue生产提示
Vue.config.productionTip = false

//全局配置混合
/* Vue.mixin(mixin)
Vue.mixin(mixin2) */


//创建vm
new Vue({
    el:'#app',
    render:h => h(App)
})