import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'
import Layout from '@/layout'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
NProgress.configure({ showSpinner: false })
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/dashboard',
      children: [
        {
          path: 'dashboard',
          component: () => import('@/views/dashboard/index'),
          name: 'Dashboard',
          meta: { title: 'dashboard', icon: 'dashboard', affix: true }
        },
        {
          path: 'editor',
          component: () => import('@/views/editor/index'),
          name: 'editor',
          meta: { title: 'editor', icon: 'editor', affix: true }
        },
        {
          path: 'clipboard',
          component: () => import('@/views/clipboard/index'),
          name: 'clipboard',
          meta: { title: 'clipboard', icon: 'clipboard', affix: true }
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
router.beforeEach((to, form, next) => {
  NProgress.start()
  next()
})
router.afterEach(() => {
  NProgress.done()
})

export default router
