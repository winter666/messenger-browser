<template>
  <div class="message-container">
    <div v-for="message in chat.messages" class="message" :class="{self: message.user.id === getUser.id}">
      <div class="content">{{ message.content }}</div>
    </div>
  </div>
</template>

<script>

import {mapGetters} from "vuex";

export default {
  name: "Messages",
  props: {
    chatId: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapGetters(['getUser']),
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

<style scoped lang="scss">
.message-container {
  min-height: 60vh;
  max-height: 60vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  padding: 10px;
  .message {
    padding: 12px;
    margin: 2px;
    max-width: 60%;
    color: #fff;
    background-color: #808080;
    align-self: flex-start;
    border-radius: 12px;
    border-bottom-left-radius: 0;

    &.self {
      background-color: rgb(21, 78, 193);
      align-self: flex-end;
      border-radius: 12px;
      border-bottom-right-radius: 0;
    }
  }
}
</style>
