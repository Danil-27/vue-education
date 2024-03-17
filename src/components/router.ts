import { createWebHistory, createRouter } from 'vue-router'

import Home from './homePage.vue'
import Catalog from './catalogPage.vue'

const routes = [
  { path: '/', component: Home },
  {
    path: '/catalog',
    component: Catalog,
    children: [
      { path: 'soups', component: () => import('./soupComponent.vue') },
      { path: 'woks', component: () => import('./woksComponent.vue') }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
