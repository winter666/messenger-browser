<template>
  <div>
    <GeneralHeader />
      <div class="flex-wrapper flex-wrapper__wrap relative">
        <GeneralSidebar />
        <div class="chat-window">
          <router-view />
        </div>
      </div>
  </div>
</template>

<script>
import GeneralSidebar from "../components/Genreal/GeneralSidebar";
import GeneralHeader from "../components/Genreal/GeneralHeader";

export default {
  name: "AppLayout",
  components: { GeneralHeader, GeneralSidebar },
}
</script>

<style scoped>
.chat-window {
  width: 70%;
}

@media (max-width: 441px) {
  .chat-window {
    background-color: #fff;
    position: absolute;
    width: 100%;
    height: calc(100vh - 4.0625rem);
    z-index: 1000;
  }
}
</style>