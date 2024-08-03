<template>
  <h2>我是About的内容</h2>
</template>

<script>
    export default {
        name:'About',
        /* beforeDestroy(){
          console.log('About组件即将被销毁');
          
        }, */
        /* mounted(){
          console.log('About组件挂载完毕了',this);//this中发现组件中多了$route和$router
          window.aboutRoute = this.$route
          window.aboutRouter = this.$router
        } */
       mounted(){
        console.log('%%%',this.$route);
       },

       //通过路由规则，进入该组件时被调用
       beforeRouteEnter(to,from,next){
        console.log('App--beforeRouteEnter');
        if (to.meta.isAuth) { //判断是否需要鉴权
            if(localStorage.getItem('school') === 'lsb666'){
                next()
            }else{
                alert('学校名不对，无权限查看！')
            }
        }else{
            next()
        }
       },
       //通过路由规则，离开该组件时被调用
       beforeRouteLeave(to,from,next){
        console.log('App--beforeRouteLeave');
        next()
       },
    }
</script>