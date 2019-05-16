import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'
import Layout from '@/layout'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout
      // redirect: '/dashboard',
      // children: [
      //   {
      //     path: 'dashboard',
      //     component: () => import('@/views/dashboard/index'),
      //     name: 'Dashboard',
      //     meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      //   }
      // ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
