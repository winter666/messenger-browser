<template>
  <va-list class="list">
    <va-list-item
        v-for="chat in getChats"
        :key="chat.id"
        class="list__item"
        :class="{active: chat.id === parseInt($route.params.chat_id)}"
        :to="{ name: 'Chat', params: { chat_id: chat.id } }"
    >
      <va-list-item-section avatar>
        <va-avatar>
          {{ getUserAvatar(chat.users) }}
        </va-avatar>
      </va-list-item-section>

      <va-list-item-section>
        <va-list-item-label>
          {{ getChatPartner(chat.users).name }}
        </va-list-item-label>

        <va-list-item-label v-if="chat.messages.length > 0" caption>
              <span
                  v-if="chat.messages[chat.messages.length - 1].user.id === getUser.id"
                  style="color: #3f3f3f"
              >
                Вы:
              </span>
          {{ chat.messages[chat.messages.length - 1].content }}
        </va-list-item-label>
      </va-list-item-section>

      <va-list-item-section v-if="chat.messages.length" icon>
        {{ parseMessageDate(chat.messages[chat.messages.length - 1].created_at) }}
      </va-list-item-section>
    </va-list-item>
    <div v-if="getChats.length === 0" class="opacity-5 empty-list">Nothing to view</div>
  </va-list>
</template>

<script>
import {mapGetters} from "vuex";
import AbstractUserList from "./AbstractUserList";

export default {
  extends: AbstractUserList,
  name: "ChatList",
  computed: {
    ...mapGetters(['getUser', 'getChats']),
  },
  methods: {
    getChatPartner(participants) {
      return participants[participants.findIndex((p) => p.id !== this.$store.getters.getUser.id)];
    },
    getUserAvatar(participants) {
      const user = this.getChatPartner(participants);
      return this.getAvatar(user);
    },
    parseMessageDate(stringDate) {
      const isToday = (date) => {
        const today = new Date()
        return date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear()
      }
      const date = new Date(stringDate);
      if (isToday(date)) {
        return date.getHours() + ":" + date.getMinutes();
      }

      return date.toLocaleDateString();
    },
  },
}
</script>

<style scoped lang="scss">
.va-list-item {
  text-decoration: none!important;
  color: #000;
}

.va-list-item:active {
  color: #000;
}

.empty-list {
  margin: 20px;
}
</style>
