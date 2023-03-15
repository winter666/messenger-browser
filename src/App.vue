<template>
  <div>
    <router-view/>
    <Loader v-if="!requestCompleted" />
  </div>
</template>

<script>
import user from './modules/api/user';
import {mapActions, mapGetters} from "vuex";
import Loader from "./components/Genreal/Loader";

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
    async requestUserInfo() {
      const {data} = await user.getInfo(this.getUser().id);
      const chats = data.item.chats;
      this.setChats(chats);
      setTimeout(() => this.requestCompleted = true, 700);
    },
  },
  created() {
    this.requestUserInfo();
  }
}
</script>

<style src="./assets/_templates.css">
</style>
