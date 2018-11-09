import Vue from 'vue'   
import VueRouter from 'vue-router'   //引进这两个文件然后在实例化router

//把组件引进来
// import Home from './../components/Home.vue' 两种写法
import Home from '@/components/home'
import List from '@/components/list'
import My from '@/components/my'
import User from '@/components/user'

 var router = new VueRouter({
     routes: [{
        path:'/home',
        component: Home      //组件写在这里比较乱,拎出去另外写，在src里面建一个文件夹component专门放组件 Home.vue
     },{
        path:'/list',
        component:List
     },{
        path:'/my',
        component:My
     },{
        path:'/user',
        component:User
     },{
         path:'*',
         redirect:'/home'
     }]
 })

export default router;  //引进来的东西要暴露出去才能用



// 以上实例和暴露两步可以合并写为一步
// export default new VueRouter({
//     routes:[]
// })