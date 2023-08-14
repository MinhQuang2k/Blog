<template>
  <a-modal
    title="Tạo nhóm câu hỏi mới"
    :visible="visible"
    @ok="closeModal"
    @cancel="closeModal"
    cancelText="Hủy"
    okText="Lưu"
  >
    <h4>Tên nhóm câu hỏi</h4>
    <a-input />
  </a-modal>
</template>

<script>
export default {
  name: "ModalAdd",
  data() {
    return {};
  },
  methods: {},
};
</script>
