<template>
  <div>
    <div class="box-white-full">
      <div class="px-4 border-bottom d-flex justify-content-between">
        <div>
          <h4>{{ name }}</h4>
          <p>{{ description }}</p>
        </div>
        <div>
          <a-button type="link" @click="onShowModal"
            ><a-icon type="edit"
          /></a-button>
          <a-dropdown v-model="isMore">
            <a-button type="link"><a-icon type="ellipsis" /></a-button>
            <a-menu slot="overlay" @click="onMore">
              <a-menu-item :key="MORE.PRINT"> In </a-menu-item>
              <a-menu-item :key="MORE.EXPORT"> Xuất tệp </a-menu-item>
              <a-menu-item :key="MORE.DELETE" class="c-red"> Xóa </a-menu-item>
            </a-menu>
          </a-dropdown>
        </div>
      </div>
      <div class="px-4 pt-4 d-flex justify-content-between">
        <div class="d-flex align-items-center">
          <div class="d-flex align-items-center mr-4">
            <a-icon type="question-circle" class="mr-2" />
            <div>{{ totalQuestions }} Câu hỏi</div>
          </div>
          <div class="d-flex align-items-center mr-4">
            <a-icon type="crown" class="mr-2" />
            <div>{{ totalScore }} Điểm</div>
          </div>
          <div class="d-flex align-items-center mr-4">
            <a-icon type="clock-circle" class="mr-2" />
            <div>{{ timeLimit }} phút</div>
          </div>
          <div class="d-flex align-items-center mr-4">
            <a-icon type="file" class="mr-2" />
            <div v-if="type === TYPE_EXAM.ONE_QUESTION_PAGE">
              1 câu hỏi / trang
            </div>
            <div v-else>Tất cả câu hỏi / trang</div>
          </div>
          <div v-if="shuffleQuestion" class="d-flex align-items-center mr-4">
            <a-icon type="retweet" class="mr-2" />
            <div>Giữ thứ tự các câu hỏi</div>
          </div>
        </div>
        <div>
          <a-dropdown-button type="primary" @click="onAddQuestion">
            Thêm câu hỏi
            <a-menu slot="overlay" @click="onMenu">
              <a-menu-item :key="ADD_QUESTION.BY_HAND">
                Tạo bằng tay
              </a-menu-item>
              <a-menu-item :key="ADD_QUESTION.MY_BANK">
                Tạo từ ngân hàng của tôi
              </a-menu-item>
              <a-menu-item :key="ADD_QUESTION.QUESTION_BANK">
                Tạo từ ngân hàng câu hỏi</a-menu-item
              >
              <a-menu-item :key="ADD_QUESTION.EXCEL_FILE">
                Tạo từ file excel</a-menu-item
              >
            </a-menu>
            <a-icon slot="icon" type="caret-down" />
          </a-dropdown-button>
        </div>
      </div>
    </div>
    <a-collapse expand-icon-position="right">
      <template #expandIcon>
        <a-icon type="caret-right" :rotate="90" />
      </template>
      <a-collapse-panel v-for="item in questions" :key="item.id">
        <template #header>
          <a-row type="flex" justify="space-between">
            <a-col>
              <h4 v-html="item.content"></h4>
            </a-col>
            <a-col
              ><a-button type="link" @click.stop="onEditQuestion(item.id)">
                <a-icon type="edit"
              /></a-button>
              <a-button type="link" @click.stop="onCloneQuestion(item.id)"
                ><a-icon type="copy"
              /></a-button>
              <a-button type="link" @click.stop="onDeleteQuestion(item.id)">
                <a-icon type="delete" /></a-button
            ></a-col>
          </a-row>
        </template>
        <div class="box-white">
          <a-row>
            <a-col :span="10" :offset="2"
              ><AnswerInfoMuliti
                v-if="item.type === QUESTION_TYPE.MULITI"
                :answers="item.answer"
                :correctAnswers="item.correct_answer"
              />
              <AnswerInfoBoolean
                v-if="item.type === QUESTION_TYPE.BOOLEAN"
                :answers="item.answer"
                :correctAnswer="item.correct_answer"
              />
              <AnswerInfoMatch
                v-if="item.type === QUESTION_TYPE.MATCH"
                :questions="item.matching_answer.questions"
                :answers="item.matching_answer.answers"
                :correctAnswers="item.matching_correct"
              />
              <AnswerInfoFillBlank
                v-if="item.type === QUESTION_TYPE.FILLBLANK"
                :content="item.content"
                :correctAnswers="item.fill_blank_correct_answer"
              />
            </a-col>
            <a-col :span="12"><ListTest /></a-col>
          </a-row>
        </div>
      </a-collapse-panel>
    </a-collapse>
    <ModalAdd
      :isShow.sync="isShowModal"
      @onSave="onEdit"
      :categories="categories"
      :dataEdit="{
        name: this.name,
        timeLimit: this.timeLimit,
        description: this.description,
        shuffleQuestion: this.shuffleQuestion,
        type: this.type,
        subjectId: this.subjectId,
      }"
    />
  </div>
</template>

<script>
import { TYPE_EXAM, MORE, ADD_QUESTION } from "@/constants/exam";
import { mapActions } from "vuex";
import { mapFields } from "vuex-map-fields";
import { QUESTION_TYPE } from "@/constants/question";
import AnswerInfoBoolean from "@/components/question/answerInfo/answerInfoBoolean";
import AnswerInfoFillBlank from "@/components/question/answerInfo/answerInfoFillBlank";
import AnswerInfoMatch from "@/components/question/answerInfo/answerInfoMatch";
import AnswerInfoMuliti from "@/components/question/answerInfo/answerInfoMuliti";
import ListTest from "@/components/question/listTest";
import ModalAdd from "./modal/modalAdd.vue";
export default {
  name: "testEdit",
  components: {
    AnswerInfoBoolean: AnswerInfoBoolean,
    AnswerInfoFillBlank: AnswerInfoFillBlank,
    AnswerInfoMatch: AnswerInfoMatch,
    AnswerInfoMuliti: AnswerInfoMuliti,
    ListTest: ListTest,
    ModalAdd: ModalAdd,
  },
  data() {
    return {
      TYPE_EXAM,
      QUESTION_TYPE,
      MORE,
      ADD_QUESTION,
      isMore: false,
      isShowModal: false,
      categories: [],
    };
  },
  computed: {
    ...mapFields("testEdit", {
      id: "id",
      name: "name",
      timeLimit: "timeLimit",
      description: "description",
      shuffleQuestion: "shuffleQuestion",
      type: "type",
      totalQuestions: "totalQuestions",
      totalScore: "totalScore",
      subjectId: "subjectId",
      questions: "questions",
      rooms: "rooms",
    }),
  },
  mounted() {
    this.getListCategory();
  },
  methods: {
    ...mapActions("testEdit", ["getCategory", "update", "delete", "getByID"]),
    ...mapActions("question", [
      "deleteQuestionToExam",
      "addQuestionToExam",
      "clones",
    ]),
    onShowModal() {
      this.isShowModal = true;
    },
    onCloseModal() {
      this.isShowModal = false;
    },
    async onEdit(data) {
      const response = await this.update({
        id: this.id,
        payload: data,
      });
      if (response?.data?.code === "SUCCESS") {
        this.$notification["success"]({
          message: "Tạo thành công",
        });
        this.getByID({ id: this.id });
      } else {
        this.$notification["error"]({
          message: "Lôĩ khi tạo",
        });
      }
      this.onCloseModal();
    },
    async getListCategory() {
      const response = await this.getCategory();

      if (response?.data?.code === "SUCCESS") {
        this.categories = response?.data?.data;
      }
    },
    onMore(e) {
      switch (e.key) {
        case this.MORE.PRINT:
          return;
        case this.MORE.EXPORT:
          return;
        case this.MORE.DELETE:
          this.onDelete();
          return;
      }
    },
    async onDelete() {
      const response = await this.delete({
        id: this.id,
      });

      if (response?.data?.code === "SUCCESS") {
        this.$notification["success"]({
          message: "Xóa thành công",
        });
        this.$router.push({
          path: "/tests",
        });
      } else {
        this.$notification["error"]({
          message: "Lôĩ khi xóa",
        });
      }
    },
    onAddQuestion() {
      this.$router.push({
        path: `/questions/create?test_id=${this.id}`,
      });
    },
    onMenu(e) {
      switch (e.key) {
        case ADD_QUESTION.BY_HAND:
          this.onAddQuestion();
          return;
        case ADD_QUESTION.MY_BANK:
          this.$router.push({ path: `/questions/bank?test_id=${this.id}` });
          return;
        case ADD_QUESTION.QUESTION_BANK:
          return;
        case ADD_QUESTION.EXCEL_FILE:
          return;
      }
    },
    onEditQuestion(questionId) {
      this.$router.push({ path: `/questions/${questionId}/edit` });
    },
    async onCloneQuestion(questionId) {
      const response = await this.clones({ id: questionId });

      if (response?.data?.code === "SUCCESS") {
        if (this.id && response?.data?.data.id) {
          await this.addQuestionExam({
            testId: this.id,
            questionId: response?.data?.data.id,
          });
        } else {
          this.$notification["error"]({
            message: "Lôĩ khi tạo",
          });
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
        this.getByID({ id: this.id });
      } else {
        this.$notification["error"]({
          message: "Lôĩ khi tạo",
        });
      }
    },
    async onDeleteQuestion(questionId) {
      const response = await this.deleteQuestionToExam({
        testId: this.id,
        questionId: questionId,
      });

      if (response?.data?.code === "SUCCESS") {
        this.$notification["success"]({
          message: "Xóa thành công",
        });
        this.getByID({ id: this.id });
      } else {
        this.$notification["error"]({
          message: "Lôĩ khi xóa",
        });
      }
    },
  },
};
</script>
