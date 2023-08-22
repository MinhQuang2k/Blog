<template>
  <div class="box-white mb-4">
    <h4>Đáp án</h4>
    <div class="d-flex align-items-center my-3">
      <a-checkbox @change="onChange" class="mr-3"></a-checkbox>
      <div class="mr-3">A)</div>
      <a-input placeholder="Nhập nội dung" />
      <a-button type="link"><a-icon type="close-circle" /></a-button>
    </div>
    <div class="d-flex align-items-center my-3">
      <a-checkbox @change="onChange" class="mr-3"></a-checkbox>
      <div class="mr-3">A)</div>
      <a-input placeholder="Nhập nội dung" />
      <a-button type="link"><a-icon type="close-circle" /></a-button>
    </div>
    <div class="d-flex justify-content-between mt-5">
      <a-button type="primary">Thêm đáp án</a-button>
      <div>
        (*) Chọn <b>đáp án đúng</b> bằng cách Click vào ô vuông cạnh đáp án
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnswerMuliti",
  data() {
    return {};
  },
  methods: {},
};
</script>
