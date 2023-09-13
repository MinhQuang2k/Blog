<template>
  <div>
    <h4>Đáp án</h4>
    <div class="d-flex justify-content-center">
      <table class="table-match">
        <tr>
          <th></th>
          <th class="text-center">A</th>
          <th class="text-center">B</th>
        </tr>
        <tr v-for="question in questions" :key="question.id">
          <th>1</th>
          <td v-for="answer in answers" :key="answer.id">
            <a-checkbox
              :readonly="true"
              :checked="onCheck(question.id, answer.id)"
            />
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnswerInfoMatch",
  props: {
    questions: {
      type: Array,
      default: () => [
        { id: 1, content: "<p>1</p>" },
        { id: 2, content: "<p>2</p>" },
        { id: 3, content: "<p>f</p>" },
      ],
    },
    answers: {
      type: Array,
      default: () => [
        { id: "a", content: "<p>1</p>" },
        { id: "b", content: "<p>2</p>" },
      ],
    },
    correctAnswers: {
      type: Object,
      default: () => ({ 1: ["a"], 2: ["b"], 3: ["a"] }),
    },
  },
  methods: {
    onCheck(question, answer) {
      return (
        this.correctAnswers[question] &&
        this.correctAnswers[question].includes(answer)
      );
    },
  },
};
</script>
