<template>
  <div class="left-sidebar-container">
    <div class="left-sidebar">
      <va-list>
        <va-list-label>
          Чаты
        </va-list-label>
        <va-list-item
            v-for="chat in getChats"
            :key="chat.id"
            class="sidebar-item"
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

            <va-list-item-label caption>
              <span
                  v-if="chat.messages[chat.messages.length - 1].user.id === getUser.id"
                  style="color: #3f3f3f"
              >
                Вы:
              </span>
              {{ chat.messages[chat.messages.length - 1].content }}
            </va-list-item-label>
          </va-list-item-section>

          <va-list-item-section icon>
            {{ parseMessageDate(chat.messages[chat.messages.length - 1].created_at) }}
          </va-list-item-section>
          <div v-if="chat.id === parseInt($route.params.chat_id)" class="active-chat"></div>
        </va-list-item>
      </va-list>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "GeneralSidebar",
  data () {
    return {
    };
  },
  computed: {
    ...mapGetters(['getUser', 'getChats']),
  },
  methods: {
    getChatPartner(participants) {
      return participants[participants.findIndex((p) => p.id !== this.$store.getters.getUser.id)];
    },
    getUserAvatar(participants) {
      const user = this.getChatPartner(participants);
      const userNameArray = user.name
          .split(' ')
          .map(partName => partName.substr(0, 1));
      return user.avatar ?? userNameArray.join('').toUpperCase();
    },
    parseMessageDate(stringDate) {
      // TODO: временно - переделать после получения данных
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

<style lang="scss">
.left-sidebar-container {
  background-color: #fff;
  width: 30%;
  height: calc(100vh - 4.0625rem);
  box-shadow: 0.3em 0.3em 1em rgba(0,0,0,0.3);
}
.left-sidebar-container .left-sidebar {
  padding: 0 1.5rem;
}
.left-sidebar .sidebar-item .va-list-item__inner {
  padding: 5px 0 !important;
}
.va-list-item {
  text-decoration: none!important;
  color: #000;
  position: relative;

  .active-chat {
    background-color: rgba(10, 250, 250, 0.1);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }
}
.va-list-item:active {
  color: #000;
}
</style>
