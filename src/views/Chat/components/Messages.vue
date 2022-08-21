<template>
  <div class="message-container">
    <div v-for="message in chat.messages" class="message">
      <div class="content">{{ message.content }}</div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Messages",
  props: {
    chatId: {
      type: Number,
      required: true,
    },
  },
  computed: {
    chat() {
      return this.getChat();
    }
  },
  methods: {
    getChat() {
      const chats = this.$store.getters.getChats;
      const idx = chats.findIndex(ch => ch.id === this.chatId);
      return chats[idx];
    },
  }
}
</script>

<style scoped>

</style>