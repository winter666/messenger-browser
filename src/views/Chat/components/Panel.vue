<template>
  <div class="panel">
    <div class="content-in">
      <va-input v-model="messageContent" type="textarea" placeholder="Type your message.." />
    </div>
    <div class="button-send">
      <va-button @click="pushMessage">Send</va-button>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

export default {
  name: "Panel",
  data() {
    return {
      messageContent: ''
    }
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
    pushMessage() {
      const message = this.prepareMessage();
      this.appendMessage({ chat_id: parseInt(this.$route.params.chat_id), message});
      this.messageContent = '';
    }
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
