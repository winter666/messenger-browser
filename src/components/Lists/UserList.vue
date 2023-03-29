<template>
  <va-list class="list">
    <va-list-item
        v-for="user in users"
        :key="user.id"
        @click="selectUser(user.id)"
        :class="{active: user.id === selectedId}"
        class="list__item"
    >
      <va-list-item-section avatar>
        <va-avatar>
          {{ getAvatar(user) }}
        </va-avatar>
      </va-list-item-section>

      <va-list-item-section>
        <va-list-item-label>
          {{ user.name }}
        </va-list-item-label>

        <va-list-item-label caption>

        </va-list-item-label>
      </va-list-item-section>
    </va-list-item>
  </va-list>
</template>

<script>
import AbstractUserList from "./AbstractUserList";

export default {
  name: "UserList",
  extends: AbstractUserList,
  props: {
    users: {
      type: Array,
      required: true,
    },
    selectedId: {
      type: Number,
      required: false,
      default: null,
    }
  },
  methods: {
    selectUser(userId) {
      this.$emit('selected', userId)
    },
  },
}
</script>

<style scoped>

</style>
