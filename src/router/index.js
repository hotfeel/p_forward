import Vue from 'vue'
import Router from 'vue-router'
import head from '@/components/m_header/head'
import VSchart from '@/components/echarts/v-schart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VSchart',
      component: VSchart
    },{
      path: '/head',
      name: 'head',
      component: head
    }
  ]
})
