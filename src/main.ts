import { createApp } from 'vue';
import App from './App.vue';
import 'normalize.css';
import GlobalComponent from './GlobalComponent/GlobalComponent.vue';

const app = createApp(App);

app.component('GlobalComponent', GlobalComponent);

app.mount('#app');
