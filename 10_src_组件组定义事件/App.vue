<template>
  <div class="app">
    <h1>{{msg}},学生姓名是:{{ studentName }}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现，子给父传递数据 -->
    <School :getSchoolName="getSchoolName"/>

    <hr>

    <!-- 通过父组件给子组件绑定一个自定义事件实现，子给父传递数据（第一种写法，使用@或v-on） -->
    <!-- v-on的简写形式 @ -->
    <Student v-on:lsb="getStudentName" @demo="m1" @click.native="show"/>

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法，使用ref） -->
    <!-- <Student ref="student" /> -->
  </div>
</template>

<script>
    import Student from './components/Student'
    import School from './components/School'

    export default {
        name:'App',
        components:{
          Student,
          School
        },
        data() {
          return {
            msg:'你好啊!',
            studentName:''
          }
        },
        methods:{
          getSchoolName(name){
            console.log('App收到了学校名',name);
          },
          getStudentName(name,...a){
            console.log('App收到了学生名',name,a);
            this.studentName = name
          },
          m1(){
            console.log('demo事件被触发了');
            
          },
          show(){
            alert('123')
          }
        },
        /* mounted(){
          setTimeout(() => {
            this.$refs.student.$on('lsb',this.getStudentName)  //绑定自定义事件
            this.$refs.student.$once('lsb',this.getStudentName)  //绑定自定义事件（一次性）
          }, 3000);
        } */
    }
</script>

<style>
  .app{
    background-color: gray;
    padding: 5px;
  }
</style>
