import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import Watch from './views/Watch.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/watch', component: Watch }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
