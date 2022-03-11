import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  // {
  //   // 这属于 “DOM 放在了主应用的某个路由页面”，所以加载微应用的时候，会报错找不到某个容器
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    // 代表在 / 路由后可以增加任意路由，不限层级
    path: '//:micrAppRoute*',
    name: 'home',
    component: HomeView
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
