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
    <StepOne v-if="step === 0" />
    <StepTwo v-else />
  </div>
</template>

<script>
import StepOne from "./step/stepOne.vue";
import StepTwo from "./step/stepTwo.vue";
export default {
  components: { StepOne, StepTwo },
  data() {
    return {
      step: 0,
    };
  },
  methods: {
    changeStep(value) {
      this.step = value;
    },
  },
};
</script>
