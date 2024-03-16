import { createWebHistory, createRouter } from 'vue-router'

import Home from './homePage.vue'
import Catalog from './catalogPage.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/catalog', component: Catalog }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
