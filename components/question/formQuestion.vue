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
        <a-button type="primary" v-if="isShowUpdate" @click="onUpdate">
          Cập nhật câu hỏi
        </a-button>
        <a-button type="primary" v-else @click="onAdd"> Tạo câu hỏi </a-button>
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
import { mapActions } from "vuex";
import generate from "@/mixins/generate";
import { required } from "vuelidate/lib/validators";
export default {
  name: "bankCreate",
  mixins: [generate],
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
      testId: null,
    };
  },
  provide() {
    return {
      $v: this.$v,
    };
  },
  validations() {
    return {
      tagId: {
        required,
      },
      score: {
        required,
      },
      content: {
        required,
      },
      answersMuliti: {
        required,
        $each: {
          content: {
            required,
          },
        },
      },
      answersBoolean: {
        required,
        $each: {
          content: {
            required,
          },
        },
      },
      matchingQuestions: {
        required,
        $each: {
          content: {
            required,
          },
        },
      },
      matchingAnswers: {
        required,
        $each: {
          content: {
            required,
          },
        },
      },
      fillBlankCorrectAnswers: {
        required,
        $each: {
          content: {
            required,
          },
        },
      },
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
    isShowUpdate() {
      return (this.$route.path || "").includes("edit");
    },
  },
  watch: {
    questionType() {
      this.$v.$reset();
    },
  },
  mounted() {
    this.testId = this.$route.query?.test_id;
  },
  methods: {
    ...mapActions("question", ["create", "update", "addQuestionToExam"]),
    async onAdd() {
      this.$v.$touch();
      if (this.checkValidations()) return;
      if (this.checkEmptyCorrect()) {
        this.$notification["error"]({
          message: "Lỗi chưa chọn đáp án",
        });
        return;
      }
      const response = await this.create();

      if (response?.data?.code === "SUCCESS") {
        if (this.testId && response?.data?.data.id) {
          await this.addQuestionExam({
            testId: this.testId,
            questionId: response?.data?.data.id,
          });
        } else {
          this.$notification["success"]({
            message: "Tạo thành công",
          });
          this.goBack();
        }
      } else {
        this.$notification["error"]({
          message: "Lôĩ khi tạo",
        });
      }
    },
    async addQuestionExam(payload) {
      const response = await this.addQuestionToExam(payload);
      if (response?.data?.code === "SUCCESS") {
        this.$notification["success"]({
          message: "Tạo thành công",
        });
        this.$router.push({ path: `/tests/${this.testId}/edit` });
      } else {
        this.$notification["error"]({
          message: "Lôĩ khi tạo",
        });
      }
    },
    async onUpdate() {
      const id = this.$route.params.id;
      if (!id) return;
      const response = await this.update({ id });

      if (response?.data?.code === "SUCCESS") {
        this.$notification["success"]({
          message: "Cập nhật thành công",
        });
        this.goBack();
      } else {
        this.$notification["error"]({
          message: "Lôĩ khi cập nhật",
        });
      }
    },
    checkEmptyCorrect() {
      switch (this.questionType) {
        case this.QUESTION_TYPE.MULITI:
          if (this.correctAnswersMuliti.length) return false;
          return true;
        case this.QUESTION_TYPE.BOOLEAN:
          if (this.correctAnswerBoolean) return false;
          return true;
        case this.QUESTION_TYPE.MATCH:
          for (let item of this.matchingCorrectAnswers) {
            if (item.length) {
              return false;
            }
          }
          return true;
        default:
          return true;
      }
    },
    checkValidations() {
      if (
        this.$v.tagId.$invalid ||
        this.$v.score.$invalid ||
        this.$v.content.$invalid
      ) {
        return true;
      }
      switch (this.questionType) {
        case this.QUESTION_TYPE.MULITI:
          if (this.$v.answersMuliti.$invalid) return true;
          return false;
        case this.QUESTION_TYPE.BOOLEAN:
          if (this.$v.answersBoolean.$invalid) return true;
          return false;
        case this.QUESTION_TYPE.MATCH:
          if (
            this.$v.matchingQuestions.$invalid ||
            this.$v.matchingAnswers.$invalid
          )
            return true;
          return false;
        case this.QUESTION_TYPE.FILLBLANK:
          if (this.$v.fillBlankCorrectAnswers.$invalid) return true;
          return false;
        default:
          return false;
      }
    },
  },
};
</script>
