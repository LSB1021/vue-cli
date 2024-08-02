//该文件用于创建Vuex中最为核心的store

import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)

import countOptions from './count'
import personOptions from './person'


//创建并暴露（导出）store
export default new Vuex.Store({
    modules:{
        countOptions,
        personOptions
    }
})