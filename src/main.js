import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import { createVuestic } from 'vuestic-ui'
import VueSocketIO from 'vue-3-socket.io'
import SocketIO from 'socket.io-client';

const socketConnection = SocketIO('http://localhost:3000');

const app = createApp(App);

app.use(new VueSocketIO({
    debug: true,
    connection: socketConnection,
    vuex: {
        store,
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_'
    },
}));
app.use(store);
app.use(router);
app.use(createVuestic());

app.mount('#app');
