<template>
  <div
      class="loader-wrapper"
      :style="{width: fullResolution ? '100vw' : '100%', height: fullResolution ? '100vh' : '100%'}">
    <div class="lds-dual-ring"></div>
  </div>
</template>

<script>
export default {
  name: "Loader",
  props: {
    fullResolution: {
      type: Boolean,
      required: false,
      default: true,
    }
  },
}
</script>

<style scoped>
.loader-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(5, 12, 12, 0.3);
}
.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #154ec1;
  border-color: #154ec1 transparent #154ec1 transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
