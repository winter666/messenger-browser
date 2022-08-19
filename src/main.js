import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { createVuestic } from 'vuestic-ui'

const app = createApp(App);
app.use(router);

app.use(createVuestic());
app.mount('#app');
