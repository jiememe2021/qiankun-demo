import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/vue3-app'
  },
  {
    path: '/category-app',
    name: 'category',
    component: () => import(/* webpackChunkName: "Category" */ '@/views/Home.vue')
  },
  {
    path: '/vue3-app',
    name: 'vue3App',
    component: () => import(/* webpackChunkName: "Category" */ '@/views/Home.vue')
  },
]

export default routes
