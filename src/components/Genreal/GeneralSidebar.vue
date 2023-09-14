<template>
  <div class="left-sidebar-container">
    <div class="left-sidebar">
      <chat-list />
    </div>
  </div>
</template>

<script>

import ChatList from "@/components/Lists/ChatList";
export default {
  name: "GeneralSidebar",
  components: {ChatList},
}
</script>

<style lang="scss">
.left-sidebar-container {
  background-color: #fff;
  width: 30%;
  height: calc(100vh - 5rem);
  box-shadow: 0.3em 0.3em 1em rgba(0,0,0,0.3);
}

.left-sidebar-container .left-sidebar {
  padding: 0 1.5rem;
}
</style>
