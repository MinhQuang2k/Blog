<template>
  <div>
    <a-steps
      @change="changeStep"
      :current="step"
      type="navigation"
      size="small"
      class="step box-white"
    >
      <a-step
        title="Chọn đề thi tuyển"
        :status="step ? 'finish' : 'process'"
        description="Đề thi không thể thay đổi sau khi tạo đợt thi"
      />
      <a-step
        title="Cài đặt đợt thi"
        :status="step ? 'process' : 'wait'"
        description="Tên đợt thi, mã truy cập, thời gian"
      />
    </a-steps>
    <keep-alive>
      <component v-bind:is="currentStep" />
    </keep-alive>
  </div>
</template>

<script>
import StepOne from "./step/stepOne.vue";
import StepTwo from "./step/stepTwo.vue";
import { mapFields } from "vuex-map-fields";

export default {
  components: { StepOne, StepTwo },
  computed: {
    ...mapFields("roomSetting", {
      testId: "setting.testId",
      step: "step",
    }),
    currentStep() {
      if (this.step) {
        return "StepTwo";
      }
      return "StepOne";
    },
  },
  methods: {
    changeStep(value) {
      if (this.testId) {
        this.step = value;
      } else {
        this.$notification["error"]({
          message: "Vui lòng chọn đề thi",
        });
      }
    },
  },
};
</script>
