<template>
  <div class="school">
    <h2 >学校名称：{{ name }}</h2>
    <h2>学生地址：{{ address }}</h2>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js';
  export default {
      name:'School',
      data() {
          return {
              name:'sc',
              address:'tc'
          }
      },
      mounted(){
        // console.log('School',this.$bus);
        /* this.$bus.$on('hello',(data) => {
          console.log('我是School组件，收到了数据',data);
        }) */
       this.pubId = PubSub.subscribe('hello',(msgName,data)=>{
        console.log(this);
        console.log("有人发布了hello消息，hello消息的回调执行了",msgName,data);
       })
      },
      beforeDestroy(){
        // this.$bus.$off('hello')
        PubSub.unsubscribe(this.pubId)  //此处取消订阅和定时器类似，要根绝对应的id进行取消，因为若有多次订阅，每个都是不相同的
      }
  }
</script>

<style scoped>
  .school{
    background-color: skyblue;
    padding: 5px;
  }
</style>