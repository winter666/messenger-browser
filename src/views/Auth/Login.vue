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
          <div>
            <va-button color="success" class="w-100">
              Log in
            </va-button>
          </div>
        </va-card-content>
      </va-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        email: '',
        password: '',
      }
    };
  }
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
