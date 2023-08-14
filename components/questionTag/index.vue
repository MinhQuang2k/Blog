<template>
  <div>
    <div class="box-white">
      <a-row type="flex" justify="space-between">
        <a-col :span="8" class="box-search">
          <a-input class="input-search" placeholder="Search" />
          <a-icon type="search" class="icon-search" />
        </a-col>
        <a-col :span="4" class="d-flex justify-content-end"
          ><a-button type="primary" @click="openModal"
            >Add Group Question</a-button
          ></a-col
        >
      </a-row>
    </div>
    <div class="box-white">
      <a-row type="flex" justify="space-between">
        <a-col :span="6"> text seach </a-col>
        <a-col>
          <a-button type="link"> <a-icon type="delete" /></a-button>
          <a-button type="link"> <a-icon type="edit" /></a-button>
        </a-col>
      </a-row>
      <a-row type="flex" justify="space-between">
        <a-col :span="6"><a-input value="text seach" /> </a-col>
        <a-col>
          <a-button> Hủy</a-button>
          <a-button type="primary"> Cập nhật</a-button>
        </a-col>
      </a-row>
    </div>
    <div class="box-white">
      <a-row type="flex" justify="space-between">
        <a-col :span="6"> text seach </a-col>
        <a-col>
          <a-button type="link"> <a-icon type="delete" /></a-button>
          <a-button type="link"> <a-icon type="edit" /></a-button>
        </a-col>
      </a-row>
    </div>
    <div class="mt-4 d-flex justify-content-end">
      <a-pagination v-model="current" :total="50" show-less-items />
    </div>
  </div>
</template>

<script>
export default {
  name: "QuestionTag",

  data() {
    return {
      current: 2,
      visible: false,
    };
  },
  methods: {
    openModal() {
      this.visible = true;
    },
    closeModal() {
      this.visible = false;
    },
  },
};
</script>
