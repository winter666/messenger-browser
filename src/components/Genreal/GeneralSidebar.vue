<template>
  <div class="left-sidebar-container">
    <div class="left-sidebar">
      <va-list>
        <va-list-label>
          Чаты
        </va-list-label>
        <va-list-item
            v-for="(chat, index) in getUser.chats"
            :key="index"
            class="sidebar-item"
            :to="{ name: 'Chat', params: { chat_id: (index+1) } }"
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
                  v-if="chat.messages[0].user.id === getUser.id"
                  style="color: #3f3f3f"
              >
                Вы:
              </span>
              {{ chat.messages[0].content }}
            </va-list-item-label>
          </va-list-item-section>

          <va-list-item-section icon>
<!--            <va-icon-->
<!--                name="remove_red_eye"-->
<!--                color="gray"-->
<!--            />-->
            {{ parseMessageDate(chat.messages[0].created_at) }}
          </va-list-item-section>
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
      contacts: [
        {
          name: 'Audrey Clay',
          address: '644 Vermont Court, Freelandville, Kentucky, 2619',
          img: 'https://randomuser.me/api/portraits/women/5.jpg'
        },
        {
          name: 'Aguirre Klein',
          address: '626 Carroll Street, Roulette, Ohio, 1477',
          img: 'https://randomuser.me/api/portraits/men/1.jpg'
        },
        {
          name: 'Tucker Kaufman',
          address: '887 Winthrop Street, Tryon, Florida, 3912',
          img: 'https://randomuser.me/api/portraits/men/3.jpg'
        },
        {
          name: 'Herbert Keller',
          address: '286 NW. Shore St.Longwood, FL 32779',
          img: 'https://randomuser.me/api/portraits/men/5.jpg'
        },
      ],
    };
  },
  computed: {
    ...mapGetters(['getUser']),
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
        return date.getUTCHours() + ":" + date.getUTCMinutes();
      }

      return date.getUTCDay();
    },
  },
}
</script>

<style>
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
}
</style>