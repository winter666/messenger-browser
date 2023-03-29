<template>
  <div>
    <va-card-title>New Chat</va-card-title>
    <va-card-content>
      <div class="user-list">
        <va-list class="list">
          <va-list-item @click="selectUser(1)" :class="{active: 1 === selectedUser}" class="list__item">
            <va-list-item-section avatar>
              <va-avatar>
                T
              </va-avatar>
            </va-list-item-section>

            <va-list-item-section>
              <va-list-item-label>
                Test
              </va-list-item-label>

              <va-list-item-label caption>
                test
              </va-list-item-label>
            </va-list-item-section>
          </va-list-item>
          <va-list-item @click="selectUser(2)" :class="{active: 2 === selectedUser}" class="list__item">
            <va-list-item-section avatar>
              <va-avatar>
                T
              </va-avatar>
            </va-list-item-section>

            <va-list-item-section>
              <va-list-item-label>
                Test
              </va-list-item-label>

              <va-list-item-label caption>
                test
              </va-list-item-label>
            </va-list-item-section>
          </va-list-item>
          <va-list-item @click="selectUser(3)" :class="{active: 3 === selectedUser}" class="list__item">
            <va-list-item-section avatar>
              <va-avatar>
                T
              </va-avatar>
            </va-list-item-section>

            <va-list-item-section>
              <va-list-item-label>
                Test
              </va-list-item-label>

              <va-list-item-label caption>
                test
              </va-list-item-label>
            </va-list-item-section>
          </va-list-item>
          <va-list-item @click="selectUser(4)" :class="{active: 4 === selectedUser}" class="list__item">
            <va-list-item-section avatar>
              <va-avatar>
                T
              </va-avatar>
            </va-list-item-section>

            <va-list-item-section>
              <va-list-item-label>
                Test
              </va-list-item-label>

              <va-list-item-label caption>
                test
              </va-list-item-label>
            </va-list-item-section>
          </va-list-item>
          <va-list-item @click="selectUser(5)" :class="{active: 5 === selectedUser}" class="list__item">
            <va-list-item-section avatar>
              <va-avatar>
                T
              </va-avatar>
            </va-list-item-section>

            <va-list-item-section>
              <va-list-item-label>
                Test
              </va-list-item-label>

              <va-list-item-label caption>
                test
              </va-list-item-label>
            </va-list-item-section>
          </va-list-item>
          <va-list-item @click="selectUser(6)" :class="{active: 6 === selectedUser}" class="list__item">
            <va-list-item-section avatar>
              <va-avatar>
                T
              </va-avatar>
            </va-list-item-section>

            <va-list-item-section>
              <va-list-item-label>
                Test
              </va-list-item-label>

              <va-list-item-label caption>
                test
              </va-list-item-label>
            </va-list-item-section>
          </va-list-item>
        </va-list>
      </div>
    </va-card-content>
    <va-card-actions><va-button>ok</va-button></va-card-actions>
  </div>
</template>

<script>
import ModalPopup from "../ModalPopup";
export default {
  name: "NewChat",
  components: {ModalPopup},
  data() {
    return {
      selectedUser: null,
    };
  },
  methods: {
    selectUser(userId) {
      this.selectedUser = userId;
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
