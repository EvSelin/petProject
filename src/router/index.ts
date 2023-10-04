import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import AuthView from '@/views/authentication/AuthView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/login',
    name: 'AuthView',
    component: AuthView,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
