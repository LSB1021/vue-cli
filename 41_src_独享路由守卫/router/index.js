//该文件专门用于创建整个应用的路由器
import About from "@/pages/About.vue";
import Home from "@/pages/Home.vue";
import News from "@/pages/News.vue"
import Message from "@/pages/Message.vue"
import Detail from "@/pages/Detail.vue"
import VueRouter from "vue-router";

//创建并暴露一个路由器
const router = new VueRouter({
    routes:[
        {
            name:'about',
            path:'/about',
            component:About,
            meta:{title:'关于'}
        },
        {
            name:'home',
            path:'/home',
            component:Home,
            meta:{title:'主页'},
            children:[
                {
                    name:'news',
                    path:'news',
                    component:News,
                    meta:{isAuth:true,title:'新闻'},
                    beforeEnter:(to,from,next)=>{
                        console.log('独享路由守卫',to,from);
                        if (to.meta.isAuth) { //判断是否需要鉴权
                            if(localStorage.getItem('school') === 'lsb666'){
                                next()
                            }else{
                                alert('学校名不对，无权限查看！')
                            }
                        }else{
                            next()
                        }
                    }
                },
                {
                    name:'message',
                    path:'message',
                    component:Message,
                    meta:{isAuth:true,title:'消息'},
                    children:[
                        {
                            name:'detail',
                            // path:'detail/:id/:title', //使用占位符声明接收params参数
                            path:'detail',
                            component:Detail,
                            meta:{title:'详情'},
                            //props的第一种写法，值为对象,该对象中的所有key-value都会以props的形式传给Detail组件
                            // props:{a:1,b:'hello'}  这是死数据，此方法用的少，知道即可

                            //props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件
                            //不会理会query参数，只会把params参数转为props
                            // props:true

                            //props的第三种写法，值为函数,通过回调函数的$route,如果为query参数或params参数就使用对应的
                            /* props($route){
                                return {id:$route.query.id, title:$route.query.title}
                            } */
                            //通过解构赋值$route的属性,一
                            props({query}){
                                return {id:query.id, title:query.title}
                            }
                            //通过连续解构赋值$route以及query的属性,二
                                /* props({query:{id,title}}){
                                    return {id, title}
                                } */
                        }
                    ]
                },
            ]
        },
    ]
})

//全局前置路由守卫——————初始化时被调用、每次路由切换之前被调用
/* router.beforeEach((to,from,next)=>{
    console.log('前置路由守卫',to,from);
    if (to.meta.isAuth) { //判断是否需要鉴权
        if(localStorage.getItem('school') === 'lsb666'){
            next()
        }else{
            alert('学校名不对，无权限查看！')
        }
    }else{
        next()
    }
}) */

//全局后置路由守卫——————初始化时被调用、每次路由切换之后被调用
/* router.afterEach((to,from) => {
    console.log('后置路由守卫',to,from);
    document.title = to.meta.title || 'lsb系统'
}) */

export default router