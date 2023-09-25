<template>
  <div>
    <h4>Đáp án</h4>
    <div class="d-flex justify-content-start">
      <table class="table-match">
        <tr>
          <th></th>
          <th class="text-center">A</th>
          <th class="text-center">B</th>
        </tr>
        <tr v-for="question in questions" :key="question.id">
          <th>{{ question.id }}</th>
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
      default: () => [],
    },
    answers: {
      type: Array,
      default: () => [],
    },
    correctAnswers: {
      type: Object,
      default: () => {},
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
