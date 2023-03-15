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

export default {
  name: "Panel",
  data() {
    return {
      messageContent: '',
      socket: null,
    }
  },
  computed: {
    isBlockBtn() {
      return this.messageContent.trim().length === 0;
    },
  },
  methods: {
    ...mapGetters(['getUser']),
    prepareMessage() {
      let user = this.getUser();
      let content = this.messageContent;
      let created_at = (new Date).toLocaleDateString("en-US");
      return { user, content, created_at };
    },

    // TODO: добавить сообщениям свойство status
    async pushMessage() {
      const message = this.prepareMessage();
      const chat_id = parseInt(this.$route.params.chat_id);
      const {user} = message;

      this.$socket.emit('send-message', {content: this.messageContent, chat_id, user_id: user.id});
      this.messageContent = '';
    },
  },
  async created() {

  }
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
