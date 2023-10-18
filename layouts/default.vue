<template>
  <div>
    <Nav />
    <a-layout class="layout">
      <a-layout-header
        class="layout_header d-flex justify-content-end align-items-center pr-4"
      >
        <a-popover placement="topLeft">
          <template slot="content">
            <p @click="settingUser" class="ma-0 mb-2 pointer">Cài đặt</p>
            <p @click="logout" class="ma-0 c-red pointer">Đăng xuất</p>
          </template>
          <a-avatar class="pointer" icon="user" size="large" /> </a-popover
      ></a-layout-header>
      <a-layout-content class="layout_content">
        <div class="layout_content_header">
          <a-breadcrumb class="mb-3">
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item
              ><a href="">Application List</a></a-breadcrumb-item
            >
            <a-breadcrumb-item>An Application</a-breadcrumb-item>
          </a-breadcrumb>
          <h4 class="fs-18">Dashboard</h4>
        </div>

        <div class="layout_content_body">
          <nuxt />
        </div>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
import Nav from "~/components/global/Nav";

export default {
  components: {
    Nav,
  },
  methods: {
    logout() {
      this.$auth.logout().then(() => {
        this.$router.push("/login/");
      });
    },
    settingUser() {},
  },
};
</script>
