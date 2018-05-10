import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/container/home/home'
import DepartManage from '@/container/departManage/departManage'
import Undo from '@/components/m_common/undo.vue'
import QueryOrder from '@/container/order/queryOrder'
import OrderDetail from '@/container/order/orderDetail'
import Demo from '@/container/demo/demo'
import Demo2 from '@/container/demo/demo2'
import Demo3 from '@/container/demo/demo3'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/departManage',
      name: 'DepartManage',
      component: DepartManage
    },{
      path: '/Demo3',
      name: 'Demo3',
      component: Demo3
    },{
      path: '/Demo',
      name: 'Demo',
      component: Demo
    },{
      path: '/demo2',
      name: 'Demo2',
      component: Demo2
    },
    {
      path:'/queryOrder',
      name:'queryOrder',
      component:QueryOrder
    },
    {
      path:'/orderDetail',
      name:'orderDetail',
      component:OrderDetail
    },
    {
      path: '*',
      name: 'Undo',
      component: Undo
    }
  ]
})
