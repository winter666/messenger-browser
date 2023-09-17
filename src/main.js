import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { createVuestic } from 'vuestic-ui';
// import "vuestic-ui/css"; // Не работает((
import VueSocketIO from 'vue-3-socket.io';
import SocketIO from 'socket.io-client';

const socketConnection = SocketIO(process.env.VUE_APP_API_WS, {
    withCredentials: false,
    transports: ['websocket', 'polling'],
    timeout: 2000000,
});

const app = createApp(App);

app.use(new VueSocketIO({
    transports: ['websocket'],
    debug: true,
    connection: socketConnection,
    timeout: 2000000,
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
