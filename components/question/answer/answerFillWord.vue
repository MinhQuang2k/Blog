<template>
  <div class="box-white mb-4">
    <h4>Đáp án</h4>
    <p>- Hệ thống không phân biệt in hoa, in thường.</p>
    <p>
      - Để ghi nhận nhiều hơn một đáp án đúng, vui lòng ngăn cách các đáp án
      bằng dấu chấm phẩy
    </p>
    <div class="d-flex align-items-center my-3">
      <div class="mr-3">1</div>
      <a-input placeholder="Nhập nội dung" />
    </div>
    <div class="d-flex align-items-center my-3">
      <div class="mr-3">2</div>
      <a-input placeholder="Nhập nội dung" />
    </div>
  </div>
</template>

<script>
export default {
  name: "AnswerFillWord",
  data() {
    return {};
  },
  methods: {},
};
</script>
