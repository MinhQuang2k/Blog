<template>
  <a-modal
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
