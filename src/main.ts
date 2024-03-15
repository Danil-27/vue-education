import { createRouter, createWebHistory } from 'vue-router';
import { createApp } from 'vue';
import App from './App.vue';
import 'normalize.css';

import commentsOne from './components/V-bind/VbindMain.vue';
import commentsTwo from './components/V-model/VmodelMainTaskThree.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'VbindMain',
      path: '/',
      component: commentsOne
    },
    {
      name: 'Vmodel',
      path: '/Vmodel',
      component: commentsTwo,
      children: [
        {
          path: 'new',
          component: () => import('./components/Routing/PostsNew.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: ':id',
          component: () => import('./components/Routing/PostsDetail.vue'),
          meta: { requiresAuth: false }
        }
      ]
    }
  ]
});
createApp(App).use(router).mount('#app');
