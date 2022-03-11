import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// 基于 /vue 路由进行配置
const routes: Array<RouteRecordRaw> = [
  {
    path: '/vue/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/vue/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
