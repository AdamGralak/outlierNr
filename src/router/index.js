import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
 {
  path: '/wynik/:outlier?',
  name: 'Wynik',
  component: () => import('@/views/Wynik.vue')
}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
