<template>
  <div class="chat-wrapper" v-if="isRender">
    <ChatHead :chat-id="getId" />
    <Messages :chat-id="getId" />
    <Panel />
  </div>
</template>

<script>
import ChatHead from "./components/ChatHead";
import Messages from "./components/Messages";
import Panel from "./components/Panel";
export default {
  name: "Chat",
  components: {Panel, Messages, ChatHead},
  data() {
    return {
      chatId: null,
      isRender: false,
    };
  },
  computed: {
    getId() {
      return this.getChatId();
    },
  },
  methods: {
    getChatId() {
      return parseInt(this.$route.params.chat_id);
    },
  },
  created() {
    const idx = this.$store.getters.getChats.findIndex(i => i.id === this.getChatId());
    if (idx === -1) {
      this.$router.push({ name: 'Main' });
    } else {
      this.isRender = true;
    }
  },
}
</script>

<style scoped>

</style>
