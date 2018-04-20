import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/container/home/home'
import DepartManage from '@/container/departManage/departManage'
import Undo from '@/components/m_common/undo.vue'
import QueryOrder from '@/container/order/queryOrder'
import OrderDetail from '@/container/order/orderDetail'
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
      name: 'Home',
      component: Home
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
