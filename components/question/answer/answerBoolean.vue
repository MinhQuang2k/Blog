<template>
  <div class="box-white mb-4">
    <h4>Đáp án</h4>
    <a-radio-group v-model="correctAnswer" class="wr-100">
      <div
        v-for="item in answers"
        :key="item.id"
        class="d-flex align-items-center my-3"
      >
        <a-radio :value="item.id" class="mr-3"></a-radio>
        <div class="mr-3">{{ upperCaseAnswer(item.id) }}</div>
        <a-input
          :value="item.content"
          @input="onChange($event, item.id)"
          placeholder="Nhập nội dung"
        />
        <a-button type="link" disabled><a-icon type="close-circle" /></a-button>
      </div>
    </a-radio-group>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
import generate from "~/mixins/generate";
export default {
  name: "AnswerBoolean",
  mixins: [generate],
  computed: {
    ...mapFields("question", {
      answers: "answersBoolean",
      correctAnswer: "correctAnswerBoolean",
    }),
  },
  methods: {
    onChange(event, id) {
      this.answers = this.answers.map((item) => {
        if (item.id === id) {
          return {
            id: id,
            content: event.target.value,
          };
        }
        return item;
      });
    },
  },
};
</script>
