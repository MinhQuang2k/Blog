<template>
  <div class="box-white mb-4">
    <h4>Đáp án</h4>
    <div class="d-flex g-4">
      <div class="df-1">
        <div class="d-flex align-items-center my-3">
          <div class="mr-3">1.</div>
          <a-input placeholder="Nhập nội dung" />
          <a-button type="link"><a-icon type="close-circle" /></a-button>
        </div>
        <div class="d-flex align-items-center my-3">
          <div class="mr-3">2.</div>
          <a-input placeholder="Nhập nội dung" />
          <a-button type="link"><a-icon type="close-circle" /></a-button>
        </div>
        <a-button type="primary" class="mt-3">Thêm đáp án</a-button>
      </div>
      <div class="df-1">
        <div class="d-flex align-items-center my-3">
          <div class="mr-3">A.</div>
          <a-input placeholder="Nhập nội dung" />
          <a-button type="link"><a-icon type="close-circle" /></a-button>
        </div>
        <div class="d-flex align-items-center my-3">
          <div class="mr-3">B.</div>
          <a-input placeholder="Nhập nội dung" />
          <a-button type="link"><a-icon type="close-circle" /></a-button>
        </div>
        <a-button type="primary" class="mt-3">Thêm đáp án</a-button>
      </div>
    </div>
    <h4 class="mt-5">Chọn đáp án</h4>
    <p>
      Bạn hãy chọn đáp án ở cột 2 tương ứng với mỗi câu ở cột 1 để hệ thống tự
      động chấm điểm cho ứng viên
    </p>
    <div class="d-flex justify-content-center">
      <table class="table-match">
        <tr>
          <th></th>
          <th class="text-center">A</th>
          <th class="text-center">B</th>
        </tr>
        <tr>
          <th>1</th>
          <td><a-checkbox /></td>
          <td><a-checkbox /></td>
        </tr>
        <tr>
          <th>2</th>
          <td><a-checkbox /></td>
          <td><a-checkbox /></td>
        </tr>
      </table>
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
