<template>
  <div>
    <router-view/>
    <Loader v-if="!requestCompleted" />
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import Loader from "./components/Genreal/Loader";

export default {
  name: 'App',
  components: {Loader},
  data() {
    return {
      requestCompleted: true,
    };
  },
  sockets: {
    connect() {
    },
    customEmit(data) {
      console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
    }
  },
  methods: {
    ...mapGetters(['getUser']),
  },
  mounted() {
    this.sockets.subscribe('get-user-chats', (data) => {
      this.requestCompleted = true;
    });
    this.sockets.subscribe('send-message', (data) => {
    });
  },
  created() {
    this.$socket.emit('get-user-chats', { user_id: this.getUser().id });
  }
}
</script>

<style src="./assets/_templates.css">
</style>
