<template>
  <div>
    <h2 @click="showName">学校名称：{{ name }}</h2>
    <h2>学生地址：{{ address }}</h2>
  </div>
</template>

<script>
  //引入一个mixin(混合)
  import {mixin,mixin2} from './mixin'

  export default {
      name:'School',
      data() {
          return {
              name:'sc',
              address:'tc'
          }
      },
      mixins:[mixin,mixin2],
      mounted(){
        console.log('你好啊！！！');
        
      }
  }
</script>