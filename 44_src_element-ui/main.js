//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'

import { Button,Row,DatePicker } from 'element-ui';

//完整引入
//引入ElementUI组件库
// import ELementUI from 'element-ui'
//引入ElementUI的全部样式
// import 'element-ui/lib/theme-chalk/index.css';

//关闭Vue生产提示
Vue.config.productionTip = false
//应用ElementUI
// Vue.use(ELementUI)

Vue.component(Button.name,Button)
Vue.component(Row.name,Row)
Vue.component(DatePicker.name,DatePicker)


//创建vm
new Vue({
    el:'#app',
    render:h => h(App),
})