<template>
  <va-button
      preset="secondary"
      border-color="primary"
      icon="add"
      @click="callModalNewChat"
      :disabled="btnDisabled"
  >
    New Chat
  </va-button>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "NewChatBtn",
  computed: {
    ...mapGetters({ btnDisabled: 'getActiveModal' }),
  },
  methods: {
    ...mapActions(['enableModal', 'setModalComponentType',]),
    callModalNewChat() {
      this.setModalComponentType('new_chat');
      this.enableModal();
    }
  },
}
</script>

<style scoped>

</style>
