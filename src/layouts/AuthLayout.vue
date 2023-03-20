<template>
  <div id="auth" class="flex-wrapper flex-column justify-content-center align-items-center">
    <div class="form">
      <h1 class="title">{{ $route.meta.title }}</h1>
      <va-card>
        <router-view/>
      </va-card>
    </div>
  </div>
</template>

<script>
import {login, me, register} from "@/modules/api/auth";
import {mapActions} from "vuex";

export default {
  name: "AuthLayout",
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
      },
      requestProcess: false,
      errorText: 'User was not found',
      errors: {
        name: [],
        email: [],
        password: [],
      },
    };
  },
  methods: {
    ...mapActions(['setUser']),

    async login() {
      this.requestProcess = true;
      this.clearErrors();
      const data = {...this.form};

      try {
        const response = await login(data);
        const access_token = response.data.access_token;
        const token_type = response.data.token_type;
        localStorage.setItem('access_token', access_token);
        localStorage.setItem('token_type', token_type);
        const userDataResponse = await me();
        const user = userDataResponse.data;
        this.setUser(user);
        this.$router.push({name: 'Main'});
      } catch (e) {
        this.setErrors(e.response);
      }

      this.requestProcess = false;
    },

    async register() {
      this.requestProcess = true;
      this.clearErrors();

      const data = {...this.form};
      try {
        const response = await register(data);
        await this.login();
      } catch (e) {
        this.setErrors(e.response);
      }

      this.requestProcess = false;
    },

    clearErrors() {
      this.errors.name = [];
      this.errors.email = [];
      this.errors.password = [];
    },

    setErrors(responseErrors) {
      if (responseErrors) {
        for (const key in responseErrors.data.errors) {
          this.errors[key] = responseErrors.data.errors[key];
        }
      }
    }
  },
}
</script>

<style scoped lang="scss">
#auth {
  height: 90vh;

  .form {
    padding: 20px 30px;
    box-shadow: 0 0 6px 1px rgba(1, 1, 1, 0.2);
    border-radius: 12px;

    .title {
      text-align: center;
    }
  }
}
</style>
