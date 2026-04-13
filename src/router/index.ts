import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/projects',
      name: 'projects',
      // route level code-splitting
      // this generates a separate chunk (Projects.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/projects/ProjectsView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/contact/ContactView.vue'),
    },
    {
      path: '/weather',
      name: 'weather',
      component: () => import('../views/weather/WeatherView.vue'),
    },
    {
      path: '/weather/75056',
      name: 'weather75056',
      component: () => import('../views/weather/WeatherShowView.vue'),
    },
    {
      path: '/stocks',
      name: 'stocks',
      component: () => import('../views/stocks/StocksView.vue'),
    },
    {
      path: '/stocks/aapl',
      name: 'stocks-aapl',
      component: () => import('../views/stocks/StocksShowView.vue'),
    },
  ],
})

export default router
