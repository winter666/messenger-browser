<template>
  <va-modal v-model="active" no-padding>
    <template #content="{ ok }">
      <component :is="getModal(getModalComponentType)" />
    </template>
  </va-modal>
</template>

<script>
import NewChat from "./Form/NewChat";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "ModalPopup",
  components: {
    NewChat,
  },
  data() {
    return {
      types: {
        new_chat: 'NewChat'
      },
    };
  },
  computed: {
    ...mapGetters(['getModalComponentType']),
    active: {
      get() {
        return this.$store.getters.getActiveModal;
      },
      set(value) {
        this.setModalActivity(value);
      },
    },
  },
  methods: {
    ...mapActions(['setModalActivity']),
    getModal(modalType) {
      if (!this.types[modalType]) {
        console.error('Undefined Modal component');
        return '';
      }

      return this.types[modalType];
    }
  },
};
</script>

<style scoped>

</style>
