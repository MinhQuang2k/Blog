<template>
  <div class="d-flex g-4">
    <div class="box-white df-1 d-flex justify-content-between br-4">
      <div>
        <h4>Câu hỏi</h4>
        <b>5</b>
      </div>
      <div><a-icon type="question-circle" class="fs-40" /></div>
    </div>
    <div class="box-white df-1 d-flex justify-content-between br-4">
      <div>
        <h4>Đề thi</h4>
        <b>5</b>
      </div>
      <div><a-icon type="file" class="fs-40" /></div>
    </div>
    <div class="box-white df-1 d-flex justify-content-between br-4">
      <div>
        <h4>Đợt thi</h4>
        <b>5</b>
      </div>
      <div><a-icon type="link" class="fs-40" /></div>
    </div>
    <div class="box-white df-1 d-flex justify-content-between br-4">
      <div>
        <h4>Nhóm đề thi</h4>
        <b>5</b>
      </div>
      <div><a-icon type="folder" class="fs-40" /></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dashboard",
  auth: "true",
  data() {
    return {
      current: 2,
    };
  },
};
</script>
