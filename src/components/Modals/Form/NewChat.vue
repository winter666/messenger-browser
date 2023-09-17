<template>
  <div>
    <va-card-title>
        <div class="new-chat__title">
          <span>New Chat</span>
          <va-icon style="cursor:pointer" name="close" @click="disableModal"/>
        </div>
    </va-card-title>
    <va-card-content>
      <div class="user-list">
        <div class="mb-3">
          <va-input
              v-model="emailOrName"
              placeholder="Type email or name"
          >
            <template #prependInner>
              <va-icon name="search" />
            </template>
          </va-input>
        </div>
        <div class="relative user-container">
          <user-list
              :users="users"
              :selected-id="selectedUserId"
              @selected="userSelected"
          />
          <loader v-if="requestSend" :full-resolution="false" />
        </div>
      </div>
    </va-card-content>
    <va-card-actions>
      <va-button
          v-if="selectedUserId"
          :disabled="requestSend"
          :loading="requestSend"
          @click="createChat"
      >
        ok
      </va-button>
    </va-card-actions>
  </div>
</template>

<script>
import UserList from "@/components/Lists/UserList";
import user from '@/modules/api/user';
import chat from '@/modules/api/chat';
import Loader from "@/components/Genreal/Loader";
import { mapActions, mapGetters } from "vuex";
import { getFullToken } from "../../../modules/auth/_token";

export default {
  name: "NewChat",
  components: {Loader, UserList },
  data() {
    return {
      selectedUserId: null,
      users: [],
      emailOrName: '',
      requestSend: false,
    };
  },
  methods: {
    ...mapActions(['setUser', 'disableModal', 'enableMainLoader']),
    ...mapGetters(['getUser']),
    userSelected(userId) {
      this.selectedUserId = userId;
    },
    async searchUser() {
      if (this.emailOrName.length > 2) {
        this.requestSend = true;
        const {data} = await user.findByEmailOrName(this.emailOrName);
        this.users = data;
        this.requestSend = false;
      } else {
        this.users = [];
        this.selectedUserId = null;
      }
    },
    async createChat() {
      this.requestSend = true;
      const response = await chat.createChat(this.getUser().id, this.selectedUserId);
      if (response.status === 200) {
        this.$socket.emit('get-user-chats', {user_id: this.getUser().id, _token: getFullToken()});
        this.requestSend = false;
        this.disableModal();
        this.enableMainLoader();
      }
    },
  },
  watch: {
    emailOrName() {
      this.searchUser();
    }
  },
}
</script>

<style scoped>
.new-chat__title {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.user-list {
  width: 20rem;
  height: 20rem;
  max-height: 20rem;
  overflow: auto;
}
.user-container {
  height: 17rem;
  overflow: hidden;
  overflow-y: auto;
}
</style>
