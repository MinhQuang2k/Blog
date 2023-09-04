<template>
  <div class="box-white mb-4">
    <h4>Đáp án</h4>
    <a-checkbox-group v-model="correctAnswers" class="wr-100">
      <div
        v-for="item in answers"
        :key="item.id"
        class="d-flex align-items-center my-3"
      >
        <a-checkbox :value="item.id" class="mr-3"></a-checkbox>
        <div class="mr-3">{{ upperCaseAnswer(item.id) }}</div>
        <a-input
          :value="item.content"
          @input="onChange($event, item.id)"
          placeholder="Nhập nội dung"
        />
        <a-button
          type="link"
          @click="onDelete(item.id)"
          :disabled="answers.length <= 2"
          ><a-icon type="close-circle"
        /></a-button>
      </div>
    </a-checkbox-group>
    <div class="d-flex justify-content-between mt-5">
      <a-button type="primary" @click="onAdd">Thêm đáp án</a-button>
      <div>
        (*) Chọn <b>đáp án đúng</b> bằng cách Click vào ô vuông cạnh đáp án
      </div>
    </div>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
import generate from "~/mixins/generate";
import { CODE_CHAR_START } from "~/constants/question";
export default {
  name: "AnswerMuliti",
  mixins: [generate],
  data() {
    return {
      CODE_CHAR_START,
    };
  },
  computed: {
    ...mapFields("question", {
      answers: "answersMuliti",
      correctAnswers: "correctAnswersMuliti",
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
    onDelete(id) {
      this.correctAnswers = this.correctAnswers
        .filter((item) => item !== id)
        .map((item) => {
          if (item.charCodeAt(0) > id.charCodeAt(0)) {
            return String.fromCharCode(item.charCodeAt(0) - 1);
          }
          return item;
        });
      this.answers = this.answers
        .filter((item) => item.id != id)
        .map((item, index) => ({
          ...item,
          id: String.fromCharCode(index + CODE_CHAR_START),
        }));
    },
    onAdd() {
      this.answers = [
        ...this.answers,
        {
          id: String.fromCharCode(this.answers.length + CODE_CHAR_START),
          content: "",
        },
      ];
    },
  },
};
</script>
