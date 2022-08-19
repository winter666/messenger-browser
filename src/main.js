import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import { createVuestic } from 'vuestic-ui'

const app = createApp(App);
app.use(store);
app.use(router);
app.use(createVuestic());

app.mount('#app');
