<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="hello" appear>  <!--如果此处的name为hello，那么下面的样式也要改名hello-enter-active-->
        <!--过度  在此内的标签会调用.v-enter-active  .v-leave-active设置的动画样式,并且显示时没有transition-->
        <h1 v-show="isShow">你好啊！</h1>
    </transition>
    
  </div>
</template>

<script>
export default {
    name:'Test',
    data() {
        return {
            isShow:true
        }
    },
}
</script>

<style scoped>
    h1{
        background-color: orange;
    }

    .hello-enter-active{
        animation: lsb 0.5s linear;
    }
    .hello-leave-active{
        animation: lsb 0.5s linear reverse;
    }

    @keyframes lsb{
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>