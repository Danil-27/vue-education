import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router/routers';
import 'normalize.css';

createApp(App).use(router).mount('#app');
