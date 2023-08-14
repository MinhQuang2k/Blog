<template>
  <a-modal
    title="Tạo đề thi"
    :visible="visible"
    @ok="closeModal"
    @cancel="closeModal"
    cancelText="Hủy"
    okText="Create"
  >
    <div class="mb-4">
      <h4>Tên đề thi</h4>
      <a-input placeholder="Nhập tên đề thi" />
    </div>
    <div class="mb-4">
      <h4>Thời gian làm bài (phút)</h4>
      <a-input type="number"></a-input>
    </div>
    <div class="mb-4">
      <h4>Nhóm đề thi</h4>
      <a-select class="wr-100" default-value="lucy" @change="selectSubject">
        <a-select-opt-group>
          <span slot="label"><a-icon type="user" />Manager</span>
          <a-select-option value="jack"> Jack </a-select-option>
          <a-select-option value="lucy"> Lucy </a-select-option>
        </a-select-opt-group>
        <a-select-opt-group label="Engineer">
          <a-select-option value="Yiminghe"> yiminghe </a-select-option>
        </a-select-opt-group>
      </a-select>
    </div>
    <div class="mb-4">
      <h4>Cài đặt hiển thị</h4>
      <a-radio-group v-model="value" @change="onChange">
        <a-radio :style="radioStyle" :value="1">
          Hiển thị một câu hỏi trên một trang
        </a-radio>
        <a-radio :style="radioStyle" :value="2">
          Hiển thị tất cả các câu hỏi trên một trang
        </a-radio>
      </a-radio-group>
    </div>
    <div>
      <h4>Đổi vị trí câu hỏi</h4>
      <a-switch default-checked @change="onChangeV" />
    </div>
    <div class="mb-4">
      <h4>Mô tả</h4>
      <a-textarea placeholder="Thông tin này có thể để trống" :rows="4" />
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
