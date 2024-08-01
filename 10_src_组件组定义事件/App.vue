<template>
  <div class="app">
    <h1>{{msg}},学生姓名是:{{ studentName }}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现，子给父传递数据 -->
    <School :getSchoolName="getSchoolName"/>

    <hr>

    <!-- 通过父组件给子组件绑定一个自定义事件实现，子给父传递数据（第一种写法，使用@或v-on） -->
    <!-- v-on的简写形式 @ -->
    <Student v-on:lsb="getStudentName" @demo="m1" @click.native="show"/>
    <!-- 
      总结：
        在普通HTML元素上使用@click监听的是原生点击事件。
        在Vue组件上（上方为Student组件）使用@click监听的是组件内部通过$emit触发的自定义click事件。
        在Vue组件上使用@click.native监听的是组件根元素的原生点击事件。

      Vue3中，.native修饰符已被移除，因为Vue3使用了不同的机制来处理组件上的原生事件监听。在Vue3中，如果你需要监听组件根元素的原生事件，你可以直接在组件上监听该事件，Vue会自动将其绑定到组件的根元素上。
    -->

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
