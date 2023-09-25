<template>
  <div>
    <h4>Đáp án</h4>
    <div
      v-for="item in correctAnswers"
      :key="item.key"
      class="d-flex align-items-center"
    >
      <div>
        <b class="mr-4"> {{ item.key }}.</b
        ><span class="mr-2 badge bg-green">{{ item.content }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import generate from "@/mixins/generate";
export default {
  name: "AnswerInfoFillBlank",
  mixins: [generate],
  props: {
    content: {
      type: String,
      default: "",
    },
    correctAnswers: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
