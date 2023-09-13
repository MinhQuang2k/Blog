<template>
  <div>
    <h4>Đáp án</h4>
    <div
      v-for="item in answers"
      :key="item.id"
      class="d-flex align-items-center"
      :class="{ 'c-green': onCheck(item.id) }"
    >
      <div class="w-20">
        <a-icon
          v-if="onCheck(item.id)"
          type="check-circle"
          class="align-middle"
        />
      </div>
      <div>
        {{ upperCaseAnswer(item.id)
        }}<span class="ml-3" v-html="item.content"></span>
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
      default: () => [
        { id: "a", content: "1" },
        { id: "b", content: "2" },
        { id: "c", content: "123" },
        { id: "d", content: "323" },
        { id: "e", content: "12" },
      ],
    },
    correctAnswers: {
      type: Array,
      default: () => ["a", "b"],
    },
  },
  methods: {
    onCheck(answer) {
      return this.correctAnswers.includes(answer);
    },
  },
};
</script>
