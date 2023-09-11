<template>
  <div>
    <div class="box-white mb-4 d-flex justify-content-between">
      <a-radio-group v-model="questionType" button-style="solid">
        <a-radio-button :value="QUESTION_TYPE.MULITI">
          Nhiều đáp án
        </a-radio-button>
        <a-radio-button :value="QUESTION_TYPE.BOOLEAN">
          Đúng Sai
        </a-radio-button>
        <a-radio-button :value="QUESTION_TYPE.MATCH"> Matching </a-radio-button>
        <a-radio-button :value="QUESTION_TYPE.FILLBLANK">
          Điền vào chỗ trống
        </a-radio-button>
      </a-radio-group>
      <div>
        <a-button type="primary" @click="onAdd"> Tạo câu hỏi </a-button>
        <a-button type="primary" @click="onUpdate"> Cập nhật câu hỏi </a-button>
        <a-button @click="goBack"> Hủy </a-button>
      </div>
    </div>
    <div class="d-flex g-4">
      <div class="df-4">
        <Setting />
      </div>
      <div class="df-8">
        <component :is="componentQuestion"></component>
        <component :is="componentAnswer"></component>
        <Note />
      </div>
    </div>
  </div>
</template>

<script>
import { QUESTION_TYPE } from "~/constants/question.js";
import Setting from "./setting";
import Question from "./question/question.vue";
import QuestionFillBlank from "./question/questionFillBlank.vue";
import Note from "./note";
import AnswerMuliti from "./answer/answerMuliti.vue";
import AnswerBoolean from "./answer/answerBoolean.vue";
import AnswerMatch from "./answer/answerMatch.vue";
import AnswerFillBlank from "./answer/answerFillBlank.vue";
import { mapFields } from "vuex-map-fields";
export default {
  name: "bankCreate",
  components: {
    Setting,
    Question,
    QuestionFillBlank,
    Note,
    AnswerMuliti,
    AnswerBoolean,
    AnswerMatch,
    AnswerFillBlank,
  },
  data() {
    return {
      QUESTION_TYPE,
      componentQuestion: Question,
      componentAnswer: AnswerMuliti,
    };
  },
  computed: {
    ...mapFields("question", {
      questionType: "questionType",
    }),
  },
  mounted() {
    this.setQuestionComponent();
  },
  methods: {
    setQuestionComponent() {
      switch (this.questionType) {
        case this.QUESTION_TYPE.MULITI:
          this.componentQuestion = Question;
          this.componentAnswer = AnswerMuliti;
          break;
        case this.QUESTION_TYPE.BOOLEAN:
          this.componentQuestion = Question;
          this.componentAnswer = AnswerBoolean;
          break;
        case this.QUESTION_TYPE.MATCH:
          this.componentQuestion = Question;
          this.componentAnswer = AnswerMatch;
          break;
        case this.QUESTION_TYPE.FILLBLANK:
          this.componentQuestion = QuestionFillBlank;
          this.componentAnswer = AnswerFillBlank;
          break;
      }
    },
    goBack() {
      this.$router.back();
    },
    onAdd() {},
    onUpdate() {},
  },
  watch: {
    questionType() {
      this.setQuestionComponent();
    },
  },
};
</script>
