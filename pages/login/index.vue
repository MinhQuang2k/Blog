<template>
  <a-row>
    <a-col :span="12">
      <div class="wr-50 mx-auto">
        <div class="d-flex justify-content-center">
          <img class="img-logo mx-auto" src="~/assets/images/logo.png" />
        </div>
        <h4 class="text-center title-auth">Đăng Nhập</h4>
        <a-input
          v-model="form.email"
          class="auth-input mb-3"
          placeholder="Email"
        >
          <a-icon class="fs-18" slot="prefix" type="mail" />
        </a-input>
        <a-input
          v-model="form.password"
          class="auth-input mb-3"
          placeholder="Mật khẩu"
        >
          <a-icon class="fs-18" slot="prefix" type="lock" />
          <a-icon class="fs-18" slot="suffix" type="eye" />
          <!-- <a-icon class="fs-18" type="eye-invisible" /> -->
        </a-input>
        <div class="d-flex justify-content-end mt-3">
          <a><b>Quên mật khẩu?</b></a>
        </div>
        <a-button class="mt-5 wr-100" type="primary" @click="onLogin"
          >Đăng Nhập</a-button
        >
        <p class="mt-5 text-center">Bạn chưa có tài khoản? <a>Đăng ký</a></p>
      </div>
    </a-col>
    <a-col :span="12"
      ><img class="img-auth" src="~/assets/images/login.png"
    /></a-col>
  </a-row>
</template>

<script>
export default {
  layout: "auth",
  auth: "guest",
  data() {
    return {
      form: {
        email: "admin@gmail.com",
        password: "admin",
      },
    };
  },
  methods: {
    async onLogin(event) {
      event.preventDefault();
      console.log("form", this.form);
      const response = await this.$auth.loginWith("local", {
        data: this.form,
      });
      if (response?.data?.code === "SUCCESS") {
        localStorage.setItem("isLogin", true);
        console.log("SUCCESS");
        this.$auth.setUserToken(response?.data?.data?.access_token);
        this.$router.push("/");
      }
      // if (result == "success") {
      //   // this.$router.push("/");
      //   // localStorage.setItem("isLogin", true);
      // } else {
      //   // await this.$auth.logout();
      // }
    },
  },
};
</script>
