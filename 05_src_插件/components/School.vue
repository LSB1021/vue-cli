<template>
  <div>
    <h2>学校名称：{{ name }}</h2>
    <h2>学生地址：{{ address }}</h2>
    <button @click="test">点我测试一个hello方法</button>
  </div>
</template>

<script>

  export default {
      name:'School',
      data() {
          return {
              name:'sc',
              address:'tc'
          }
      },
      methods:{
        test(){
          this.hello()
        }
      }
  }
</script>