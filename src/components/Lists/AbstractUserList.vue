<template></template>

<script>
export default {
  name: "AbstractUserList",
  methods: {
    getAvatar(user) {
      const userNameArray = user.name
          .split(' ')
          .map(partName => partName.substr(0, 1));
      return user.avatar ?? userNameArray.join('').toUpperCase();
    }
  },
}
</script>

<style scoped>

</style>
