<template>
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
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  methods: {},
};
</script>
