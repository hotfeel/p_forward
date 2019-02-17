import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/container/login/login'
import Demo from '@/container/demo/demo'
import Home from '@/container/home/home'
import Index from '@/container'
import Undo from '@/components/m_common/undo'
import UserManage from '@/container/base/userManage'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
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
        },
        {
          path:'/undo',
          name:'undo',
          component:Undo,
        },
        {
          path:'/userManage',
          name:'userManage',
          component:UserManage
        },
        {
          path:'/*',
          name:'all',
          component:Undo
        }
      ]
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
export default router;
router.beforeEach((to, from, next) => {
  console.log("============");
  next()
})
