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
    <a-collapse default-active-key="1" expand-icon-position="right">
      <template #expandIcon>
        <a-icon type="caret-right" :rotate="90" />
      </template>
      <a-collapse-panel key="2">
        <template #header>
          <a-row type="flex" justify="space-between">
            <a-col>
              <h4>Dashboard</h4>
              <b>133, abc, cdcd</b>
            </a-col>
            <a-col
              ><a-button type="link"> <a-icon type="edit" /></a-button>
              <a-button type="link"> <a-icon type="delete" /></a-button
            ></a-col>
          </a-row>
        </template>
        <div class="box-white">
          <a-row type="flex" justify="space-between">
            <a-col :span="6"> text seach </a-col>
            <a-col>
              <a-button type="link"> Sửa</a-button>
              <a-button type="link"> Di chuyển</a-button>
              <a-button type="link"> Xóa</a-button>
            </a-col>
          </a-row>
        </div>
        <div class="box-white">
          <a-row type="flex" justify="space-between">
            <a-col :span="6"> text seach </a-col>
            <a-col>
              <a-button type="link"> Sửa</a-button>
              <a-button type="link"> Di chuyển</a-button>
              <a-button type="link"> Xóa</a-button>
            </a-col>
          </a-row>
        </div>
        <div class="box-white">
          <a-button type="primary">Tạo danh mục con</a-button>
        </div>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script>
export default {
  name: "category",
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
    handleChange(value) {
      console.log(`selected ${value}`);
    },
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text
          .toLowerCase()
          .indexOf(input.toLowerCase()) >= 0
      );
    },
  },
};
</script>
