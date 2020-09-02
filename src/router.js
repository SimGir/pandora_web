import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Gift from './views/Gift.vue'
import Detail from './views/Detail.vue'
import Login from './views/Login.vue'
import Register from './views/Register'
import ProDetail from './views/Product_details'
import Love from './views/Love'
import Cart from './views/Cart'
import Order from './views/Order'
import MyOrder from './views/MyOrder'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {path: '/',component: Index},
    {path:'/login',component:Login},
    {path:'/register',component:Register},
    {path: '/index',component: Index},
    // {path: '/about',component: () => import('./views/About.vue')},
    {path:'/gift',component:Gift},
    {path:'/prodetail',component:ProDetail},
    {path:'/love',component:Love},
    {path:'/cart',component:Cart},
    {path:'/order',component:Order},
    {path:'/myorder',component:MyOrder},
    {path:'/detail/:product_id',component:Detail,props:true}
  ]
})
