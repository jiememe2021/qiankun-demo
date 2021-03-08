import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/category-app'
  },
  {
    path: '/category-app',
    name: 'Category',
    component: () => import(/* webpackChunkName: "Category" */ '@/views/Home.vue')
  },
]

export default routes
