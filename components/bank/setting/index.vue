<template>
  <div class="box-white">
    <h4>Cài đặt</h4>
    <div class="mb-4">
      <h4>Điểm</h4>
      <a-input />
    </div>
    <div class="mb-4">
      <h4>Nhóm câu hỏi</h4>
      <a-select
        show-search
        placeholder="Select a person"
        option-filter-prop="children"
        class="wr-100"
        :filter-option="filterOption"
        @change="handleChange"
      >
        <a-select-option value="jack"> Jack </a-select-option>
        <a-select-option value="lucy"> Lucy </a-select-option>
        <a-select-option value="tom"> Tom </a-select-option>
      </a-select>
    </div>
    <div class="mb-4">
      <h4>Thời gian làm bài</h4>
      <a-time-picker class="wr-100" @change="onChange" />
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
