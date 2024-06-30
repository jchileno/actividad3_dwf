import { createApp } from 'vue';
import App from './App.vue';
import router from './router'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '@fortawesome/fontawesome-free/css/all.css';

const app = createApp(App);

app.use(router);
app.mount('#app');

createApp(App).use(router).use(router).mount('#app')
