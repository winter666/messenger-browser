<template>
  <div id="login" class="flex-wrapper flex-column justify-content-center align-items-center">
    <div class="form">
      <h1 class="title">{{ $route.meta.title }}</h1>
      <va-card>
        <va-card-content>
          <div class="mb-3">
            <va-input
                type="email"
                v-model="form.email"
                placeholder="Email"
            />
          </div>
          <div class="mb-6">
            <va-input
                type="password"
                v-model="form.password"
                placeholder="Password"
            />
          </div>
          <div class="mb-3">
            <va-button @click="login" :disabled="requestProcess" color="success" class="w-100">
              Log in
            </va-button>
          </div>
          <va-alert v-if="hasError" color="danger" icon="warning">
              {{ loginError }}
          </va-alert>
        </va-card-content>
      </va-card>
    </div>
  </div>
</template>

<script>
import {login, me} from "@/modules/api/auth";
import {mapActions} from "vuex";

export default {
  name: "Login",
  constants: {
    loginError: 'User was not found',
  },
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      requestProcess: false,
      hasError: false,
      loginError: 'User was not found',
    };
  },
  methods: {
    ...mapActions(['setUser']),
    async login() {
      this.requestProcess = true;
      this.hasError = false;
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
        this.$router.push({ name: 'Main' });
      } catch (e) {
        this.hasError = true;
      }

      this.requestProcess = false;
    },
  },
}
</script>

<style scoped lang="scss">
#login {
  height: 90vh;

  .title {
    text-align: center;
  }

  .form {
    padding: 20px 30px;
    box-shadow: 0 0 6px 1px rgba(1, 1, 1, 0.2);
    border-radius: 12px;

    .mb-3 {
      margin-bottom: .3rem;
    }
    .mb-6 {
      margin-bottom: .6rem;
    }
    .w-100 {
      width: 100%;
    }
  }
}
</style>
