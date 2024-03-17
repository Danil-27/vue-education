import { createRouter, createWebHistory } from 'vue-router';
import commentsOne from '../components/V-bind/VbindMain.vue';
import commentsTwo from '../components/V-model/VmodelMainVue3.vue';
import commentsThree from '../components/V-model/VmodelMainTaskThree.vue';
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'VbindMain',
      path: '/',
      component: commentsOne
    },
    {
      name: 'VmodelMainVue',
      path: '/VmodelMainVue',
      component: commentsTwo
    },
    {
      name: 'Vmodel',
      path: '/Vmodel',
      component: commentsThree,
      children: [
        {
          path: 'new',
          component: () => import('./PostsNew.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: ':id',
          component: () => import('./PostsDetail.vue'),
          meta: { requiresAuth: false }
        }
      ]
    }
  ]
});
