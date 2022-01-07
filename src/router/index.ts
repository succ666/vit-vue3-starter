import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/home/home.vue'
import Vuex from '@/views/vuex/vuex.vue'
import Goods from '@/views/goods/goods.vue'
import setupDemo from '@/views/setupDemo/setupDemo.vue'
import provideInject from '@/views/provideInject/provideInject.vue'
import ts from '@/views/ts/ts.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: Vuex
  },
  {
    path: '/axios',
    name: 'Axios',
    component: () => import('@/views/axios/axios.vue') //懒加载组件
  },
  {
    path: '/goods',
    name: 'Goods',
    component: Goods
  },
  {
    path: '/setupDemo',
    name: 'setupDemo',
    component: setupDemo
  },
  {
    path: '/provideInject',
    name: 'provideInject',
    component: provideInject
  },
  {
    path: '/ts',
    name: 'ts',
    component: ts
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
