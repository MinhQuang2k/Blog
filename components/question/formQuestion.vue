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
        <Setting :tagId.sync="tagId" :score.sync="score" />
      </div>
      <div class="df-8">
        <!-- Question -->
        <Question
          v-if="questionType !== QUESTION_TYPE.FILLBLANK"
          :content.sync="content"
        />
        <QuestionFillBlank
          v-else
          :content.sync="content"
          :correctAnswers.sync="fillBlankCorrectAnswers"
        />
        <!-- Answer -->
        <AnswerMuliti
          v-if="questionType === QUESTION_TYPE.MULITI"
          :answers.sync="answersMuliti"
          :correctAnswers.sync="correctAnswersMuliti"
        />
        <AnswerBoolean
          v-else-if="questionType === QUESTION_TYPE.BOOLEAN"
          :answers.sync="answersBoolean"
          :correctAnswer.sync="correctAnswerBoolean"
        />
        <AnswerMatch
          v-else-if="questionType === QUESTION_TYPE.MATCH"
          :questions.sync="matchingQuestions"
          :answers.sync="matchingAnswers"
          :correctAnswers.sync="matchingCorrectAnswers"
        />
        <AnswerFillBlank
          v-else
          :correctAnswers.sync="fillBlankCorrectAnswers"
        />
        <Note :noteAnswer.sync="noteAnswer" />
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
    };
  },
  computed: {
    ...mapFields("question", {
      tagId: "tagId",
      score: "score",
      noteAnswer: "noteAnswer",
      questionType: "questionType",
      content: "content",
      answersMuliti: "answersMuliti",
      correctAnswersMuliti: "correctAnswersMuliti",
      answersBoolean: "answersBoolean",
      correctAnswerBoolean: "correctAnswerBoolean",
      matchingQuestions: "matchingAnswers.questions",
      matchingAnswers: "matchingAnswers.answers",
      matchingCorrectAnswers: "matchingCorrectAnswers",
      fillBlankCorrectAnswers: "fillBlankCorrectAnswers",
    }),
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    onAdd() {},
    onUpdate() {},
  },
};
</script>
