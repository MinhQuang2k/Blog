<template>
  <a-row id="myElement" class="hr-100">
    <a-col :span="12" class="hr-100"
      ><img class="img-auth" src="~/assets/images/register.png"
    /></a-col>
    <a-col :span="12">
      <div class="wr-60 mx-auto">
        <div class="d-flex justify-content-center">
          <img class="img-logo mx-auto" src="~/assets/images/logo.png" />
        </div>
        <h4 class="text-center title-auth">Đăng ký</h4>
        <div class="c-form-item">
          <span
            class="c-tooltip-error"
            :class="{
              'is-show': $v.form.fullName.$dirty && $v.form.fullName.$error,
            }"
            >Trường thông tin không được để trống
          </span>
          <a-input
            v-model="form.fullName"
            class="auth-input mb-3"
            placeholder="Họ và tên"
            :class="{
              'is-error': $v.form.fullName.$dirty && $v.form.fullName.$error,
            }"
          >
            <a-icon class="fs-18 mr-4" slot="prefix" type="user" />
          </a-input>
        </div>
        <div class="c-form-item">
          <span
            class="c-tooltip-error"
            :class="{
              'is-show': $v.form.email.$dirty && $v.form.email.$error,
            }"
            >Trường thông tin không được để trống
          </span>
          <a-input
            v-model="form.email"
            class="auth-input mb-3"
            placeholder="Email"
            :class="{
              'is-error': $v.form.email.$dirty && $v.form.email.$error,
            }"
          >
            <a-icon class="fs-18" slot="prefix" type="mail" />
          </a-input>
        </div>
        <div class="c-form-item">
          <span
            class="c-tooltip-error"
            :class="{
              'is-show': $v.form.password.$dirty && $v.form.password.$error,
            }"
            >Trường thông tin không được để trống
          </span>
          <a-input
            v-model="form.password"
            :type="isShowEyePas ? 'text' : 'password'"
            class="auth-input mb-3"
            placeholder="Mật khẩu"
            :class="{
              'is-error': $v.form.password.$dirty && $v.form.password.$error,
            }"
          >
            <a-icon class="fs-18" slot="prefix" type="lock" />
            <a-icon
              v-if="isShowEyePas"
              class="fs-18"
              slot="suffix"
              type="eye"
              @click="isShowEyePas = !isShowEyePas"
            />
            <a-icon
              v-else
              class="fs-18"
              slot="suffix"
              type="eye-invisible"
              @click="isShowEyePas = !isShowEyePas"
            />
          </a-input>
        </div>
        <div class="c-form-item">
          <span
            class="c-tooltip-error"
            :class="{
              'is-show':
                $v.form.confirmPassword.$dirty &&
                $v.form.confirmPassword.$error,
            }"
            >{{
              $v.form.confirmPassword.sameAsPassword ||
              !$v.form.confirmPassword.required
                ? "Trường thông tin không được để trống"
                : "Mật khẩu phải giống nhau"
            }}
          </span>
          <a-input
            v-model="form.confirmPassword"
            :type="isShowEyeCo ? 'text' : 'password'"
            class="auth-input mb-5"
            placeholder="Nhập lại mật khẩu"
            :class="{
              'is-error':
                $v.form.confirmPassword.$dirty &&
                $v.form.confirmPassword.$error,
            }"
          >
            <a-icon class="fs-18" slot="prefix" type="lock" />
            <a-icon
              v-if="isShowEyeCo"
              @click="isShowEyeCo = !isShowEyeCo"
              class="fs-18"
              slot="suffix"
              type="eye"
            />
            <a-icon
              v-else
              @click="isShowEyeCo = !isShowEyeCo"
              class="fs-18"
              slot="suffix"
              type="eye-invisible"
            />
          </a-input>
        </div>
        <a-button class="mt-5 wr-100" type="primary" @click="onRegister"
          >Đăng ký</a-button
        >
        <p class="mt-5 text-center">
          Đã có tài khoản? <a @click="onLogin">Đăng nhập</a>
        </p>
      </div>
    </a-col>
  </a-row>
</template>

<script>
import { required, sameAs } from "vuelidate/lib/validators";
export default {
  name: "RegisterForm",
  data() {
    return {
      isShowEyeCo: false,
      isShowEyePas: false,
      form: {
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  validations() {
    return {
      form: {
        fullName: {
          required,
        },
        email: {
          required,
        },
        password: {
          required,
        },
        confirmPassword: {
          required,
          sameAsPassword: sameAs("password"),
        },
      },
    };
  },
  methods: {
    onLogin() {
      this.$router.push({
        path: "/login/",
      });
    },
    async onRegister(event) {
      event.preventDefault();
      this.$v.form.$touch();
      if (this.$v.form.$invalid) {
        return;
      }
      console.log("this.$auth", this.$auth);
      const response = await this.$axios.post(`/auth/register`, {
        data: {
          full_name: this.form.fullName,
          email: this.form.email,
          password: this.form.password,
        },
      });
      if (response?.data?.code === "SUCCESS") {
        this.$router.push({
          path: "/login/",
        });
      } else {
        this.$notification["error"]({
          message: "Email này đã tồn tại",
        });
      }
    },
  },
};
</script>
