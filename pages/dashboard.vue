<template>
  <div>
    <!-- <div class="d-flex justify-content-between w-200">
      <div>
        <div ref="start_1" class="dot_green my-5">1</div>
        <div ref="start_2" class="dot_green my-5">2</div>
        <div ref="start_3" class="dot_green my-5">3</div>
        <div ref="start_4" class="dot_green my-5">4</div>
      </div>
      <div>
        <div ref="end_A" class="dot_green my-5">A</div>
        <div ref="end_B" class="dot_green my-5">B</div>
        <div ref="end_C" class="dot_green my-5">C</div>
        <div ref="end_D" class="dot_green my-5">D</div>
      </div>
    </div>
    <a-button type="primary" @click="onHide">hide</a-button>
    <a-button type="primary" @click="onShow">show</a-button> -->
    <!-- <div class="d-flex g-4">
      <div class="box-white df-1 d-flex justify-content-between br-4">
        <div>
          <h4>Câu hỏi</h4>
          <b>5</b>
        </div>
        <div><a-icon type="question-circle" class="fs-40" /></div>p
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
    </div> -->
  </div>
</template>

<script>
// import LeaderLine from "leader-line-vue";
export default {
  name: "dashboard",
  auth: true,
  data() {
    return {
      current: 2,
      note: "ok123",
      configLine: {
        color: "#1890ff",
        size: 3,
        path: "straight",
      },
      lines: {},
    };
  },
  // mounted() {
  //   this.lines["A_1"] = LeaderLine.setLine(
  //     this.$refs.start_1,
  //     this.$refs.end_A,
  //     this.configLine
  //   );
  // },
  methods: {
    onHide() {
      for (var i = 1; i <= 4; i++) {
        for (var char of ["A", "B", "C", "D"]) {
          this.lines[char + "_" + i].hide();
        }
      }
    },
    onShow() {
      for (var i = 1; i <= 4; i++) {
        for (var char of ["A", "B", "C", "D"]) {
          this.lines[char + "_" + i].show();
        }
      }
    },
  },
};
</script>

<style lang="scss">
.dot_green {
  height: 20px;
  width: 20px;
  background: green;
  border-radius: 50%;
}
.w-200 {
  width: 200px;
}
.c-form-item {
  position: relative;
  display: inline-block;
}

.c-tooltip-error {
  font-size: 1.2rem;
  line-height: 1.2;
  position: absolute;
  z-index: 1;
  top: auto;
  right: -0.2rem;
  bottom: calc(100% + 0.5rem + 0.2rem);
  margin: auto;
  padding: 0.4rem 1rem;
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
  color: #ffffff;
  opacity: 0;
  border-radius: 4px;
  background: #ff4d4f;
}

.c-tooltip-error::after {
  position: absolute;
  right: 1rem;
  bottom: -1rem;
  width: 1rem;
  height: 1rem;
  margin: auto;
  content: "";
  color: #ff4d4f;
  border-width: 0.5rem 0.5rem 0 0.5rem;
  border-style: solid;
  border-color: #ff4d4f transparent transparent transparent;
}

.is-error {
  background: #fff2f0;
  border-color: #ff4d4f;
}

.is-error:focus {
  border-color: #ff4d4f;
  box-shadow: 0 0 0 2px rgba(255, 77, 79, 0.2);
}

.is-show {
  opacity: 1;
}
</style>
