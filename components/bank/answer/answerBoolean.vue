<template>
  <div class="box-white mb-4">
    <h4>Đáp án</h4>
    <div class="d-flex align-items-center my-3">
      <a-radio @change="onChange" class="mr-3"></a-radio>
      <div class="mr-3">A)</div>
      <a-input placeholder="Nhập nội dung" />
      <a-button type="link"><a-icon type="close-circle" /></a-button>
    </div>
    <div class="d-flex align-items-center my-3">
      <a-radio @change="onChange" class="mr-3"></a-radio>
      <div class="mr-3">A)</div>
      <a-input placeholder="Nhập nội dung" />
      <a-button type="link"><a-icon type="close-circle" /></a-button>
    </div>
  </div>
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
