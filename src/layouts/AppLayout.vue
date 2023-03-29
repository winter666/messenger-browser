<template>
  <div>
      <GeneralHeader />
      <div class="flex-wrapper flex-wrapper__wrap relative">
        <GeneralSidebar />
        <div class="chat-window">
          <router-view />
        </div>
      </div>
      <Loader v-if="getActiveMainLoader" />
      <ModalPopup />
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import GeneralSidebar from "../components/Genreal/GeneralSidebar";
import GeneralHeader from "../components/Genreal/GeneralHeader";
import Loader from "../components/Genreal/Loader";
import { me } from "../modules/api/auth";
import ModalPopup from "../components/Modals/ModalPopup";

export default {
  name: "AppLayout",
  components: {ModalPopup, GeneralHeader, GeneralSidebar, Loader },
  data() {
    return {};
  },
  sockets: {
    connect() {
    },
  },
  computed: {
    ...mapGetters(['getActiveMainLoader']),
  },
  methods: {
    ...mapActions(['setUser', 'enableMainLoader', 'disableMainLoader']),
    ...mapGetters(['getUser']),
  },
  mounted() {
    this.sockets.subscribe('get-user-chats', (data) => {
      this.disableMainLoader();
    });
    this.sockets.subscribe('send-message', (data) => {
    });
  },
  async created() {
    this.enableMainLoader();
    try {
      const response = await me();
      const user = response.data;
      this.setUser(user);

      this.$socket.emit('get-user-chats', {user_id: this.getUser().id});
    } catch (e) {
      localStorage.clear();
      this.$router.push({ name: 'Login' });
    }
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
