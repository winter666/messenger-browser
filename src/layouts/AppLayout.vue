<template>
  <div>
    <GeneralHeader />
      <div class="flex-wrapper flex-wrapper__wrap relative">
        <GeneralSidebar />
        <div class="chat-window">
          <router-view />
        </div>
      </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import GeneralSidebar from "../components/Genreal/GeneralSidebar";
import GeneralHeader from "../components/Genreal/GeneralHeader";
import Loader from "../components/Genreal/Loader";

export default {
  name: "AppLayout",
  components: { GeneralHeader, GeneralSidebar, Loader },
  data() {
    return {
      requestCompleted: true,
    };
  },
  sockets: {
    connect() {
    },
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
  },
}
</script>

<style scoped>
.chat-window {
  width: 70%;
}

@media (max-width: 441px) {
  .chat-window {
    background-color: #fff;
    position: absolute;
    width: 100%;
    height: calc(100vh - 4.0625rem);
    z-index: 1000;
  }
}
</style>
