<template>
  <div class="box-white mb-4">
    <h4>Đáp án</h4>
    <div class="d-flex g-4">
      <div class="df-1">
        <h4 class="text-center">Cột 1</h4>
        <div
          v-for="v in $v.matchingQuestions.$each.$iter"
          :key="v.$model.id"
          class="d-flex align-items-center my-3"
        >
          <div class="mr-3">{{ v.$model.id }}.</div>
          <div class="c-form-item">
            <span
              class="c-tooltip-error"
              :class="{ 'is-show': v.$dirty && v.$error }"
              >Trường thông tin không được để trống
            </span>
            <TinyMCE
              :value="v.$model.content"
              @change="onChangeQuestion($event, v.$model.id)"
              :clazz="v.$dirty && v.$error ? 'is-error-wrapper' : ''"
            />
          </div>
          <a-button
            type="link"
            @click="onDeleteQuestion(v.$model.id)"
            :disabled="questions.length <= 1"
            ><a-icon type="close-circle"
          /></a-button>
        </div>
        <a-button type="primary" @click="onAddQuestion" class="mt-3"
          >Thêm đáp án</a-button
        >
      </div>
      <div class="df-1">
        <h4 class="text-center">Cột 2</h4>
        <div
          v-for="v in $v.matchingAnswers.$each.$iter"
          :key="v.$model.id"
          class="d-flex align-items-center my-3"
        >
          <div class="mr-3">{{ upperCase(v.$model.id) }}.</div>
          <div class="c-form-item">
            <span
              class="c-tooltip-error"
              :class="{ 'is-show': v.$dirty && v.$error }"
              >Trường thông tin không được để trống
            </span>
            <TinyMCE
              :value="v.$model.content"
              @change="onChangeAnswer($event, v.$model.id)"
              :clazz="v.$dirty && v.$error ? 'is-error-wrapper' : ''"
            />
          </div>
          <a-button
            type="link"
            @click="onDeleteAnswer(v.$model.id)"
            :disabled="answers.length <= 1"
            ><a-icon type="close-circle"
          /></a-button>
        </div>
        <a-button type="primary" @click="onAddAnswer" class="mt-3"
          >Thêm đáp án</a-button
        >
      </div>
    </div>
    <h4 class="mt-5">Chọn đáp án</h4>
    <p>
      Bạn hãy chọn đáp án ở cột 2 tương ứng với mỗi câu ở cột 1 để hệ thống tự
      động chấm điểm cho ứng viên
    </p>
    <div class="d-flex justify-content-center">
      <table class="table-match">
        <tr>
          <th></th>
          <th v-for="item in answers" :key="item.id" class="text-center">
            {{ upperCase(item.id) }}
          </th>
        </tr>
        <tr v-for="(question, index) in questions" :key="question.id">
          <th>{{ index + 1 }}</th>
          <td v-for="answer in answers" :key="answer.id">
            <a-checkbox
              @change="onCheck(question.id, answer.id)"
              :checked="getChecked(question.id, answer.id)"
            />
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import generate from "~/mixins/generate";
import { CODE_CHAR_START } from "~/constants/question";
import TinyMCE from "@/components/global/TinyMCE";
export default {
  name: "AnswerMatch",
  mixins: [generate],
  components: [TinyMCE],
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
  inject: ["$v"],
  data() {
    return {
      CODE_CHAR_START,
    };
  },
  methods: {
    onDeleteAnswer(id) {
      let newCorrectAnswers = JSON.parse(JSON.stringify(this.correctAnswers));
      for (let i = 1; i <= this.questions.length; i++) {
        newCorrectAnswers[i] = newCorrectAnswers[i]
          .filter((item) => item !== id)
          .map((item) => {
            if (item.charCodeAt(0) > id.charCodeAt(0)) {
              return String.fromCharCode(item.charCodeAt(0) - 1);
            }
            return item;
          });
      }
      this.$emit("update:correctAnswers", newCorrectAnswers);
      this.$emit(
        "update:answers",
        this.answers
          .filter((item) => item.id !== id)
          .map((item, index) => ({
            ...item,
            id: String.fromCharCode(index + CODE_CHAR_START),
          }))
      );
    },
    onDeleteQuestion(id) {
      let newCorrectAnswers = JSON.parse(JSON.stringify(this.correctAnswers));
      for (let i = id; i < this.questions.length; i++) {
        newCorrectAnswers[i] = newCorrectAnswers[i + 1];
      }
      delete newCorrectAnswers[this.questions.length];
      this.$emit("update:correctAnswers", newCorrectAnswers);
      this.$emit(
        "update:questions",
        this.questions
          .filter((item) => item.id !== id)
          .map((item, index) => ({
            ...item,
            id: index + 1,
          }))
      );
    },
    onChangeQuestion(value, id) {
      this.$emit(
        "update:questions",
        this.questions.map((item) => {
          if (item.id === id) {
            return {
              id: id,
              content: value,
            };
          }
          return item;
        })
      );
    },
    onChangeAnswer(value, id) {
      this.$emit(
        "update:answers",
        this.answers.map((item) => {
          if (item.id === id) {
            return {
              id: id,
              content: value,
            };
          }
          return item;
        })
      );
    },
    onAddAnswer() {
      this.$emit("update:answers", [
        ...this.answers,
        {
          id: String.fromCharCode(this.answers.length + CODE_CHAR_START),
          content: "",
        },
      ]);
    },
    onAddQuestion() {
      this.$emit("update:questions", [
        ...this.questions,
        {
          id: this.questions.length + 1,
          content: "",
        },
      ]);
      this.$emit("update:correctAnswers", {
        ...this.correctAnswers,
        [this.questions.length]: [],
      });
    },
    getChecked(questionId, answerId) {
      return (this.correctAnswers[questionId] || []).includes(answerId);
    },
    onCheck(questionId, answerId) {
      let newCorrectAnswers = JSON.parse(JSON.stringify(this.correctAnswers));
      if (
        this.correctAnswers[questionId] &&
        this.correctAnswers[questionId].includes(answerId)
      ) {
        newCorrectAnswers = {
          ...this.correctAnswers,
          [questionId]: this.correctAnswers[questionId].filter(
            (item) => item !== answerId
          ),
        };
      } else {
        let listCorrectAnswer = this.correctAnswers[questionId] || [];
        newCorrectAnswers = {
          ...this.correctAnswers,
          [questionId]: [...listCorrectAnswer, answerId],
        };
      }
      this.$emit("update:correctAnswers", newCorrectAnswers);
    },
  },
};
</script>
