<template>
  <a-modal :visible="visible" :footer="null" :closable="false">
    <div class="d-flex justify-content-center my-5">
      <div class="icon-warn">!</div>
    </div>
    <h4 class="text-center mb-4">Bạn có chắc chắn muốn xóa nhóm câu hỏi abc</h4>
    <div class="d-flex justify-content-center">
      <a-button type="primary" class="mr-3" @click="closeModal"
        >Đồng ý</a-button
      >
      <a-button @click="closeModal">Hủy </a-button>
    </div>
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
