<template>
  <va-card-content>
    <div class="mb-3">
      <va-input
          type="email"
          v-model="form.email"
          placeholder="Email"
          :error="errors.email.length > 0"
          :error-messages="errors.email"
      />
    </div>
    <div class="mb-6">
      <va-input
          type="password"
          v-model="form.password"
          placeholder="Password"
          :error="errors.password.length > 0"
          :error-messages="errors.password"
      />
    </div>
    <div class="mb-3">
      <va-button @click="login" :disabled="requestProcess" color="success" class="w-100">
        Log in
      </va-button>
      <div class="mt-3">
        Doesn't have an account?
        <router-link :to="{name: 'Register'}">Register now</router-link>
      </div>
    </div>
  </va-card-content>
</template>

<script>
import AuthLayout from "../../layouts/AuthLayout";

export default {
  name: "Login",
  extends: AuthLayout,
}
</script>

<style scoped>
</style>
