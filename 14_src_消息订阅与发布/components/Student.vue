<template>
  <div class="student">
    <h2>学生名称：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendStudentName">把学生名给School组件</button>
  </div>
</template>

<script>
    import PubSub from 'pubsub-js';
    export default {
        name:'Student',
        data() {
            return {
                name:'张三',
                sex:'男',
            }
        },
        mounted(){
          console.log('Student',this.$bus);
        },
        methods:{
          sendStudentName(){
            // this.$bus.$emit('hello',this.name)
            PubSub.publish('hello',666)
          }
        }
    }
</script>

<style scoped>
  .student{
    background-color: orange;
    padding: 5px;
    margin-top: 30px;
  }
</style>