//该文件用于创建Vuex中最为核心的store

import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)


//准备actions（用于响应组件中的动作）
const actions = {
    /* jia(context,value){
        console.log('action中的jia被调用了'); 
        context.commit('JIA',value)
    },
    jian(context,value){
        console.log('action中的jian被调用了'); 
        context.commit('JIAN',value)
    }, */
    jiaOdd(context,value){
        console.log('action中的jiaOdd被调用了'); 
        console.log('处理了一些事情--jiaOdd');
        context.dispatch('demo1',value)
    },
    demo1(context,value){
        console.log('处理了一些事情--demo1');
        context.dispatch('demo2',value)
    },
    demo2(context,value){
        if(context.state.sum % 2){
            context.commit('JIA',value)
        }
        console.log('处理了一些事情--demo2');
    },
    jiaWait(context,value){
        console.log('action中的jiaWait被调用了'); 
        setTimeout(() => {
            context.commit('JIA',value)
        }, 500);
    },
}

//准备mutations（用于操作数据-state）
const mutations = {
    JIA(state,value){
        console.log('mutations中的JIA被调用了');
        state.sum += value
    },
    JIAN(state,value){
        console.log('mutations中的JIAN被调用了');
        state.sum -= value
    },
    ADD_PERSON(state,value){
        console.log('mutations中的ADD_PERSON被调用了');
        state.personList.unshift(value)
    }
}

//准备state（用于存储数据）
const state = {
    sum:0, //当前的合
    school:'lsb',
    subject:'前端',
    personList:[
        {id:'001',name:'张三'}
    ]
}

//准备getters（用于将state中的数据进行加工）
const getters ={
    bigSum(state){
        return state.sum*10
    }
}


//创建并暴露（导出）store
export default new Vuex.Store({
    // actions:actions,对象里的key和保存对应值的变量重名了可以写简写形式
    actions,
    mutations,
    state,
    getters
})