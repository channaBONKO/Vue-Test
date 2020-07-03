import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import(/* webpackChunkName: "settings" */ '../views/settings.vue')
  },
  {
    path: '/endowment',
    name: 'Endowment',
    component: () => import(/* webpackChunkName: "modal" */ '../components/modal_popup.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import(/* webpackChunkName: "test" */ '../views/test.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
