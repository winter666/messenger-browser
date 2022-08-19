<template>
  <div class="navbar-sticky">
    <va-navbar color="dark" class="mb-2">
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
        <va-navbar-item>Coming soon</va-navbar-item>
      </template>
    </va-navbar>
  </div>
</template>

<script>
export default {
  name: "GeneralHeader"
}
</script>

<style scoped>
.navbar-sticky {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2000;
  width: 100vw;
}
</style>