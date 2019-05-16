// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import router from './router'

import '@/assets/css/reset.css' // 初始化样式
import 'element-ui/lib/theme-chalk/index.css'
// import Message from '@/components/message.js'
import store from '@/store'
import '@/styles/index.scss'
Vue.use(ElementUI)
// Vue.use(Message)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
