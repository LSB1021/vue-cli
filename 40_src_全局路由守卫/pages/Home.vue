<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link replace class="list-group-item" active-class="active" to="/home/news">News</router-link>
        </li>
        <li>
          <router-link replace class="list-group-item" active-class="active" to="/home/message">Message</router-link>
        </li>
      </ul>

      <!-- 缓存多个路由组件 -->
      <!-- <keep-alive :include="['News','Message']"> -->
      <!-- <keep-alive include="News,Message]"> -->
      <!-- 缓存一个路由组件 -->
      <keep-alive include="News"> <!--此处News为组件名（组件内部定义的name的值）-->
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
    export default {
        name:'Home',
        beforeDestroy(){
          console.log('Home组件即将被销毁');
        },
        /* mounted(){
          console.log('Home组件挂载完毕了',this);//this中发现组件中多了$route和$router
          window.homeRoute = this.$route
          window.homeRouter = this.$router
        } */
    }
</script>