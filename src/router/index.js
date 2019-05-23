import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'
import Layout from '@/layout'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/Index',
      children: [
        {
          path: 'Index',
          component: () => import('@/views/index'),
          name: 'Index',
          meta: { title: 'Index', icon: 'dashboard', affix: true }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
