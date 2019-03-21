// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import './common/styles/index.styl'
import './common/js/font_607986_e3tbypjph7g'
import './common/css/font_607986_e3tbypjph7g.css'
import 'element-ui/lib/theme-chalk/index.css'
import './common/js/moment-ch'; // 日期组件中文化
import 'vue-event-calendar/dist/style.css' //1.1.10之后的版本，css被放在了单独的文件中，方便替换
import vueEventCalendar from 'vue-event-calendar'
import store from './store/store'

Vue.use(ElementUI)
Vue.use(vueEventCalendar, {locale: 'zh'}) //可以设置语言，支持中文和英文
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
