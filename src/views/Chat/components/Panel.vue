<template>
  <div class="panel">
    <div class="content-in">
      <va-input v-model="messageContent" type="textarea" placeholder="Type your message.." />
    </div>
    <div class="button-send">
      <va-button @click="pushMessage" :disabled="isBlockBtn">Send</va-button>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
import chat from '@/modules/api/chat';

export default {
  name: "Panel",
  data() {
    return {
      messageContent: ''
    }
  },
  computed: {
    isBlockBtn() {
      return this.messageContent.trim().length === 0;
    },
  },
  methods: {
    ...mapGetters(['getUser']),
    ...mapActions(['appendMessage']),
    prepareMessage() {
      let user = this.getUser();
      let content = this.messageContent;
      let created_at = (new Date).toLocaleDateString("en-US");
      return { user, content, created_at };
    },
    // TODO: добавить сообщениям свойство status
    pushMessage() {
      const message = this.prepareMessage();
      const chat_id = parseInt(this.$route.params.chat_id);
      const { user } = message;
      chat.sendMessage(this.messageContent, chat_id, user.id);
      this.appendMessage({ chat_id, message});
      this.messageContent = '';
    },
  },
}
</script>

<style scoped lang="scss">
.panel {
  padding: 20px;
  border-top: 1px solid #3f3f3f;
  display: flex;
  .content-in {
    width: 80%;
    .va-input-wrapper {
      width: 100%;
    }
  }
  .button-send {
    margin: 0 10px;
  }
}
</style>
