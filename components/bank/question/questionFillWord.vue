<template>
  <div class="box-white mb-4">
    <h4>Câu hỏi</h4>
    <a-textarea placeholder="Nhập nội dung" :rows="8" />
    <p>
      <b>Hướng dẫn</b> Để tạo chỗ trống tại vị trí con trỏ chuột của bạn, hãy
      nhập theo định dạng sau [%Tên_chỗ_trống%]. Tên chỗ trống chỉ nhập số,
      không được nhập chữ cái và các ký tự đặc biệt
    </p>
    <p>Ví dụ: Điền đáp án vào chỗ trống</p>
    <p>Công cha như núi thái [%1%]</p>
    <p>[%2%] như nước trong nguồn chảy ra</p>
    <div class="d-flex justify-content-end">
      <a-button type="primary">Lưu và cài đặt đáp án</a-button>
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
