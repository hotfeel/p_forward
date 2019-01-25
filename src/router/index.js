import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/container/login/login'
import Demo from '@/container/demo/demo'
import Home from '@/container/home/home'
import Index from '@/container'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'demo',
          component: Demo
        }
      ]
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/demo',
      name: 'demo',
      component: Demo
    },
    {
      path:'/Home',
      name:'Home',
      component:Home,
    }
  ]
})
