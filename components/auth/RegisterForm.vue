<template>
  <a-row>
    <a-col :span="12"
      ><img class="img-auth" src="~/assets/images/register.png"
    /></a-col>
    <a-col :span="12">
      <div class="wr-50 mx-auto">
        <div class="d-flex justify-content-center">
          <img class="img-logo mx-auto" src="~/assets/images/logo.png" />
        </div>
        <h4 class="text-center title-auth">Đăng ký</h4>
        <a-input class="auth-input mb-3" placeholder="Họ và tên">
          <a-icon class="fs-18 mr-4" slot="prefix" type="user" />
        </a-input>
        <a-input class="auth-input mb-3" placeholder="Email">
          <a-icon class="fs-18" slot="prefix" type="mail" />
        </a-input>
        <a-input class="auth-input mb-3" placeholder="Mật khẩu">
          <a-icon class="fs-18" slot="prefix" type="lock" />
          <a-icon class="fs-18" slot="suffix" type="eye" />
          <!-- <a-icon class="fs-18" type="eye-invisible" /> -->
        </a-input>
        <a-input class="auth-input mb-5" placeholder="Nhập lại mật khẩu">
          <a-icon class="fs-18" slot="prefix" type="lock" />
          <a-icon class="fs-18" slot="suffix" type="eye" />
          <!-- <a-icon class="fs-18" type="eye-invisible" /> -->
        </a-input>
        <a-button class="mt-5 wr-100" type="primary">Đăng ký</a-button>
        <p class="mt-5 text-center">Đã có tài khoản? <a>Đăng nhập</a></p>
      </div>
    </a-col>
  </a-row>
</template>

<script>
export default {
  name: "RegisterForm",
  data() {
    return {};
  },
  methods: {},
};
</script>
