import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: ()=>import('@/views/home.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: ()=>import('@/views/cart.vue')
    },
    {
      path:'/detail',
      name:'Detail',
      component:()=>import('@/views/Detail.vue')
    }
  ]
})
