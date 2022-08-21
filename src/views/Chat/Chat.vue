<template>
  <div class="chat-wrapper">
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
    };
  },
  computed: {
    getId() {
      return parseInt(this.$route.params.chat_id);
    },
  },
}
</script>

<style scoped>

</style>