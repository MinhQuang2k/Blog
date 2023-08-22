<template>
  <div>
    <div class="box-white mb-4 d-flex justify-content-between">
      <a-radio-group v-model="questionType" button-style="solid">
        <a-radio-button :value="1"> Nhiều đáp án </a-radio-button>
        <a-radio-button :value="2"> Đúng Sai </a-radio-button>
        <a-radio-button :value="3"> Matching </a-radio-button>
        <a-radio-button :value="4"> Điền vào chỗ trống </a-radio-button>
      </a-radio-group>
      <div>
        <a-button type="primary"> Tạo câu hỏi </a-button>
        <a-button> Hủy </a-button>
      </div>
    </div>
    <div class="d-flex g-4">
      <div class="df-4">
        <Setting />
      </div>
      <!-- nhiều đáp án -->
      <div v-if="questionType === QUESTION_TYPE.MULITI" class="df-8">
        <Question />
        <AnswerMuliti />
        <Note />
      </div>
      <!-- Dúng sai -->
      <div v-if="questionType === QUESTION_TYPE.BOOLEAN" class="df-8">
        <Question />
        <AnswerBoolean />
        <Note />
      </div>
      <!-- Matching -->
      <div v-if="questionType === QUESTION_TYPE.MATCH" class="df-8">
        <Question />
        <AnswerMatch />
        <Note />
      </div>
      <!-- Điền từ -->
      <div v-if="questionType === QUESTION_TYPE.FILLWORD" class="df-8">
        <QuestionFillWord />
        <AnswerFillWord />
        <Note />
      </div>
    </div>
  </div>
</template>

<script>
import { QUESTION_TYPE } from "~/constants/question.js";
import Setting from "./setting";
import Question from "./question/question.vue";
import QuestionFillWord from "./question/questionFillWord.vue";
import Note from "./note";
import AnswerMuliti from "./answer/answerMuliti.vue";
import AnswerBoolean from "./answer/answerBoolean.vue";
import AnswerMatch from "./answer/answerMatch.vue";
import AnswerFillWord from "./answer/answerFillWord.vue";
export default {
  name: "bankCreate",
  components: {
    Setting,
    Question,
    QuestionFillWord,
    Note,
    AnswerMuliti,
    AnswerBoolean,
    AnswerMatch,
    AnswerFillWord,
  },
  data() {
    return {
      QUESTION_TYPE,
      questionType: 1,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.questionType = this.QUESTION_TYPE.MULITI;
    },
    onChange() {},
    handleChange(value) {
      console.log(`selected ${value}`);
    },
  },
};
</script>
