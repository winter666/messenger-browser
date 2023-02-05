<template>
  <div class="chat-head">
    <div class="companion-name">{{ companion.name }}</div>
  </div>
</template>

<script>
export default {
  name: "ChatHead",
  props: {
    chatId: {
      type: Number,
      required: true,
    },
  },
  computed: {
    companion() {
      return this.getCompanion();
    }
  },
  methods: {
    getCompanion() {
      const user = this.$store.getters.getUser;
      const chat = this.getChat();
      const idx = chat.users.findIndex(u => u.id !== user.id);
      return chat.users[idx];
    },
    getChat() {
      const chats = this.$store.getters.getChats;
      const idx = chats.findIndex(ch => ch.id === this.chatId);
      return chats[idx];
    },
  }
}
</script>

<style scoped lang="scss">
.chat-head {
  padding: 12px;
  background-color: #3f3f3f;
  text-align: center;
  .companion-name {
    color: #fff;
  }
}
</style>
