<template>
  <div>
    <Nav />
    <a-layout class="layout">
      <a-layout-header class="layout_header"
        ><a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
      /></a-layout-header>
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
};
</script>
