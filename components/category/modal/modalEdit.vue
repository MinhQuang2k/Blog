<template>
  <a-modal
    title="Sửa nhóm"
    :visible="visible"
    @ok="closeModal"
    @cancel="closeModal"
    cancelText="Hủy"
    okText="Lưu"
  >
    <h4>Nhập tên nhóm</h4>
    <a-input />
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
