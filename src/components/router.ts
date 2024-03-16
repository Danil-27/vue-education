import { createMemoryHistory, createRouter } from 'vue-router'

import Home from './homePage.vue'
import Catalog from './catalogPage.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/catalog', component: Catalog }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
