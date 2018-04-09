import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/container/home/home'
import DepartManage from '@/container/departManage/departManage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/departManage',
      name: 'DepartManage',
      component: DepartManage
    },{
      path: '/',
      name: 'DepartManage',
      component: DepartManage
    }
  ]
})
