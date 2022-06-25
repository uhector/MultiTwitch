import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import WatchView from '@/views/WatchView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/watch', component: WatchView }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
