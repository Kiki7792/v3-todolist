import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        redirect: '/add'
      },
      // {
      //   path: '',
      //   redirect: { name: 'Add' }
      // },
      {
        path: '/add',
        name: 'Add',
        component: () => import('@/components/Add.vue')
      },
      {
        path: '/done',
        name: 'Done',
        component: () => import('@/components/Done.vue')
      },
      {
        path: '/delete',
        name: 'Delete',
        component: () => import('@/components/Delete.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkExactActiveClass: 'active'
})

export default router
