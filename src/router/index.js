import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AnalyticsView from '../views/AnalyticsView.vue'
import OutOfDateView from '../views/OutOfDateView.vue'
import EarlyOnDateView from '../views/EarlyOnDateView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/analytics',
    name: 'analytics',
    component: AnalyticsView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/outofdate/:date/:time',
    name: 'outofdate',
    component: OutOfDateView
  },
  {
    path: '/earlyondate/:date/:time',
    name: 'earlyondate',
    component: EarlyOnDateView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
