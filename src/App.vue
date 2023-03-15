<template>
  <div>
    <router-view/>
    <Loader v-if="!requestCompleted" />
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import Loader from "./components/Genreal/Loader";
import connection from '@/modules/web-socket';

export default {
  name: 'App',
  components: {Loader},
  data() {
    return {
      requestCompleted: false,
    };
  },
  methods: {
    ...mapGetters(['getUser']),
    ...mapActions(['setChats']),
    async connect() {
      /**
       * @type MessengerSocket
       */
      const socket = await connection();
      if (socket.isConnected()) {
        socket.getUserChats(this.getUser().id, data => {
          this.setChats(data);
          setTimeout(() => this.requestCompleted = true, 700);
        });
      }
    }
  },
  created() {
    this.connect();
  }
}
</script>

<style src="./assets/_templates.css">
</style>
