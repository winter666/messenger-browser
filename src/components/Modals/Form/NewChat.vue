<template>
  <div>
    <va-card-title>New Chat</va-card-title>
    <va-card-content>
      <div class="user-list">
        <user-list
            :users="users"
            :selected-id="selectedUserId"
            @selected="userSelected"
        />
      </div>
    </va-card-content>
    <va-card-actions><va-button>ok</va-button></va-card-actions>
  </div>
</template>

<script>
import UserList from "@/components/Lists/UserList";
export default {
  name: "NewChat",
  components: { UserList },
  data() {
    return {
      selectedUserId: null,
      users: [
        {
          id: 1, name: 'Test 1'
        },
        {
          id: 2, name: 'Test 2'
        },
        {
          id: 3, name: 'Test 3'
        },
        {
          id: 4, name: 'Test 4'
        },
        {
          id: 5, name: 'Test 5'
        },
        {
          id: 6, name: 'Test 6'
        },
      ],
    };
  },
  methods: {
    userSelected(userId) {
      this.selectedUserId = userId;
    }
  },
}
</script>

<style scoped>
.user-list {
  width: 20rem;
  height: 20rem;
  max-height: 20rem;
  overflow: auto;
}
</style>
