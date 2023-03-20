<template>
  <div class="navbar-sticky">
    <va-navbar color="#111111">
      <template #left>
        <va-navbar-item>
          <va-image src="../assets/logo.png"/>
        </va-navbar-item>
      </template>
      <template #center>
        <va-navbar-item>
          {{ $route.meta.title }}
        </va-navbar-item>
      </template>
      <template #right>
        <va-navbar-item v-if="getUser">
          <va-button-dropdown preset="plain">
            <template #label>
              <va-avatar>
                {{ getUserAvatar(getUser) }}
              </va-avatar>
            </template>
            <va-list>
              <va-list-item class="profile-list-action">
                Settings
              </va-list-item>
              <va-list-item class="profile-list-action" @click="logout">
                Logout
              </va-list-item>
            </va-list>
          </va-button-dropdown>
        </va-navbar-item>
      </template>
    </va-navbar>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {logout} from "@/modules/api/auth";

export default {
  name: "GeneralHeader",
  computed: {
    ...mapGetters(['getUser']),
  },
  methods: {
    ...mapActions(['enableMainLoader', 'disableMainLoader']),
    getUserAvatar(user) {
      const userNameArray = user.name
          .split(' ')
          .map(partName => partName.substr(0, 1));
      return user.avatar ?? userNameArray.join('').toUpperCase();
    },
    async logout() {
      this.enableMainLoader();
      try {
        await logout();
        localStorage.clear();
        this.$router.push({ name: 'Login' });
      } catch(e) {
        console.log(e);
      }
      this.disableMainLoader();
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar-sticky {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2000;
  width: 100%;
}
.va-navbar {
  width: auto !important;
  min-width: auto !important;
  padding: 1rem;
}
.profile-list-action {
  padding: 8px;
  cursor: pointer;
}
.profile-list-action:hover {
  background-color: rgba(10, 250, 250, 0.1);
}
</style>
