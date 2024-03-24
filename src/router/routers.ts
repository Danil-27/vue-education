import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/tasks-1/ComponentsHome.vue';
import Users from '../components/tasks-1/ComponentsUsers.vue';
import Settings from '../components/tasks-1/ComponentsSettings.vue';
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home
    },
    {
      name: 'Users',
      path: '/Users',
      component: Users
    },
    {
      name: 'Settings',
      path: '/Settings',
      component: Settings,
      children: [
        {
          path: 'new',
          component: () => import('./RoutersOne.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: 'none',
          component: () => import('./RoutersTwo.vue'),
          meta: { requiresAuth: false }
        }
      ]
    }
  ]
});
