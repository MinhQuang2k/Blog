<template>
  <a-layout has-sider>
    <a-layout-sider :width="230" class="navbar">
      <div class="logo">Quiz test</div>
      <a-menu v-model="selectedKeys" theme="dark" mode="inline">
        <template v-for="item in sidebar">
          <a-menu-item
            v-if="!item.sub.length"
            :key="item.key"
            @click="handChangeRoute(item.link)"
          >
            <a-icon type="bar-chart" />
            <span class="nav-text">{{ item.name }}</span>
          </a-menu-item>
          <a-sub-menu v-else :key="item.subkey">
            <template #title>
              <span> <a-icon type="bar-chart" />{{ item.name }}</span>
            </template>
            <a-menu-item
              v-for="sub in item.sub"
              :key="sub.key"
              @click="handChangeRoute(sub.link)"
              ><span
                ><a-icon type="bar-chart" />{{ sub.name }}</span
              ></a-menu-item
            >
          </a-sub-menu>
        </template>
      </a-menu>
    </a-layout-sider>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      selectedKeys: [],
      collapsed: false,
      sidebar: [
        {
          key: 1,
          name: "Tổng quan",
          link: "/",
          icon: "",
          sub: [],
        },
        {
          subkey: 2,
          name: "Nhóm đề thi",
          link: null,
          icon: "",
          sub: [
            {
              key: 21,
              name: "Nhóm đề thi",
              link: "/categories",
              icon: "",
            },
            {
              key: 22,
              name: "Nhóm câu hỏi",
              link: "/question-tags",
              icon: "",
            },
          ],
        },
        {
          key: 3,
          name: "Đề thi",
          link: "/tests",
          icon: "",
          sub: [],
        },
        {
          key: 4,
          name: "Đợt thi tuyển",
          link: "/rooms",
          icon: "",
          sub: [],
        },
        {
          subkey: 5,
          name: "Ngân hàng đề thi",
          link: null,
          icon: "",
          sub: [
            {
              key: 51,
              name: "Ngân hàng của tôi",
              link: "/questions/bank",
              icon: "",
            },
            {
              key: 52,
              name: "Ngân hàng đề thi",
              link: "/sample-tests",
              icon: "",
            },
            {
              key: 53,
              name: "Ngân hàng câu hỏi",
              link: "/sample-questions",
              icon: "",
            },
          ],
        },
        {
          key: 6,
          name: "Thống kê",
          link: "/campaigns",
          icon: "",
          sub: [],
        },
      ],
    };
  },
  methods: {
    handChangeRoute(link) {
      this.$router.push(link);
    },
  },
};
</script>
<style scoped></style>
