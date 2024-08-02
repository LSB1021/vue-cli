//求和相关的配置
export default{
    namespaced:true,
    actions:{
        jiaOdd(context,value){
            console.log('action中的jiaOdd被调用了'); 
            console.log('处理了一些事情--jiaOdd');
            context.dispatch('demo1',value)
        },
        jiaWait(context,value){
            console.log('action中的jiaWait被调用了'); 
            setTimeout(() => {
                context.commit('JIA',value)
            }, 500);
        },
    },
    mutations:{
        JIA(state,value){
            console.log('mutations中的JIA被调用了');
            state.sum += value
        },
        JIAN(state,value){
            console.log('mutations中的JIAN被调用了');
            state.sum -= value
        },
    },
    state:{
        sum:0, //当前的合
        school:'lsb',
        subject:'前端',
    },
    getters:{
        bigSum(state){
            return state.sum*10
        }
    }
}

