//该文件专门用于创建整个应用的路由器
import About from "@/pages/About.vue";
import Home from "@/pages/Home.vue";
import News from "@/pages/News.vue"
import Message from "@/pages/Message.vue"
import Detail from "@/pages/Detail.vue"
import VueRouter from "vue-router";

//创建并暴露一个路由器
export default new VueRouter({
    routes:[
        {
            name:'about',
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'news',
                    component:News
                },
                {
                    path:'message',
                    component:Message,
                    children:[
                        {
                            name:'detail',
                            path:'detail/:id/:title', //使用占位符声明接收params参数
                            component:Detail,
                        }
                    ]
                },
            ]
        },
        
    ]
})