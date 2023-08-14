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
    <!-- <a-modal
      title="Sửa nhóm"
      :visible="visible"
      @ok="closeModal"
      @cancel="closeModal"
      cancelText="Hủy"
      okText="Lưu"
    >
      <h4>Nhập tên nhóm</h4>
      <a-input />
    </a-modal> -->
    <!-- <a-modal
      title="Thêm nhóm con mới"
      :visible="visible"
      @ok="closeModal"
      @cancel="closeModal"
      cancelText="Hủy"
      okText="Lưu"
    >
      <h4>Nhập tên nhóm</h4>
      <a-input />
    </a-modal> -->

    <!-- <a-modal
      title="Tạo nhóm mới"
      :visible="visible"
      @ok="closeModal"
      @cancel="closeModal"
      cancelText="Hủy"
      okText="Lưu"
    >
      <h4>Tên nhóm</h4>
      <a-input placeholder="Nhập vào nội dung" class="mb-4" />
      <h4>Tên danh mục con</h4>
      <div class="mb-1">
        <a-input placeholder="Nhập vào nội dung" class="mb-3" />
        <a-input placeholder="Nhập vào nội dung" class="mb-3" />
      </div>
      <a-button type="primary">Thêm danh mục con</a-button>
    </a-modal> -->

    <a-modal
      title="Di chuyển danh mục con"
      :visible="visible"
      @ok="closeModal"
      @cancel="closeModal"
      cancelText="Hủy"
      okText="Lưu"
    >
      <h4>Chọn nhóm di chuyển cho danh mục con DEF</h4>
      <a-row>
        <a-col :span="11">
          <h4>Nhóm hiện tại</h4>
          <a-input :disabled="true" value="ABC"
        /></a-col>
        <a-col :span="11" :offset="2"
          ><h4>ABC Nhóm mới</h4>
          <a-select
            show-search
            placeholder="Select a person"
            option-filter-prop="children"
            :filter-option="filterOption"
            @change="handleChange"
            class="wr-100"
          >
            <a-select-option value="jack"> Jack </a-select-option>
            <a-select-option value="lucy"> Lucy </a-select-option>
            <a-select-option value="tom"> Tom </a-select-option>
          </a-select></a-col
        >
      </a-row>
    </a-modal>
  </div>
</template>

<script>
export default {
  name: "categories",
  auth: "true",
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
