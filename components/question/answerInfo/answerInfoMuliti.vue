<template>
  <div>
    <h4>Đáp án</h4>
    <div
      v-for="item in answers"
      :key="item.id"
      class="d-flex align-items-start"
      :class="{ 'c-green': onCheck(item.id) }"
    >
      <div class="w-20">
        <a-icon
          v-if="onCheck(item.id)"
          type="check-circle"
          class="align-middle"
        />
      </div>
      <div class="d-flex">
        <div>{{ upperCaseAnswer(item.id) }}</div>
        <div class="ml-3" v-html="item.content"></div>
      </div>
    </div>
    <!-- <div class="d-flex c-red">
      <div class="w-20">
        <a-icon type="close-circle" class="align-middle" />
      </div>
      <div>B)<span class="ml-3">1</span></div>
    </div> -->
  </div>
</template>

<script>
import generate from "@/mixins/generate";
export default {
  name: "AnswerInfoMuliti",
  mixins: [generate],
  props: {
    answers: {
      type: Array,
      default: () => [],
    },
    correctAnswers: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    onCheck(answer) {
      console.log("this.correctAnswers", this.correctAnswers);
      return this.correctAnswers.includes(answer);
    },
  },
};
</script>
