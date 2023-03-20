<template>
  <va-card-content>
    <div class="mb-3">
      <va-input
          type="text"
          v-model="form.name"
          placeholder="Name"
          :error="errors.name.length > 0"
          :error-messages="errors.name"
      />
    </div>
    <div class="mb-3">
      <va-input
          type="email"
          v-model="form.email"
          placeholder="Email"
          :error="errors.email.length > 0"
          :error-messages="errors.email"
      />
    </div>
    <div class="mb-3">
      <va-input
          type="password"
          v-model="form.password"
          placeholder="Password"
          :error="errors.password.length > 0"
          :error-messages="errors.password"
      />
    </div>
    <div class="mb-6">
      <va-input
          type="password"
          v-model="form.password_confirmation"
          placeholder="Password Confirmation"
      />
    </div>
    <div class="mb-3">
      <va-button @click="register" :disabled="requestProcess" color="success" class="w-100">
        Register
      </va-button>
      <div class="mt-3">
        Already have an account?
        <router-link :to="{name: 'Login'}">Log in now</router-link>
      </div>
    </div>
  </va-card-content>
</template>

<script>
import AuthLayout from "../../layouts/AuthLayout";

export default {
  name: "Register",
  extends: AuthLayout,
}
</script>

<style scoped>
</style>
