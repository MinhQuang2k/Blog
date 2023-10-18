<template>
  <div>
    <div class="box-white">
      <a-row type="flex" justify="space-between">
        <a-col :span="8" class="box-search">
          <a-input
            v-model="keyword"
            class="input-search"
            placeholder="Search"
          />
          <a-icon type="search" class="icon-search" @click="onSearch" />
        </a-col>
        <a-col :span="5" class="pl-4">
          <a-select v-model="sortBy" class="select">
            <a-select-option
              v-for="item in LIST_SORT"
              :key="item.value"
              :value="item.value"
            >
              {{ item.text }}
            </a-select-option>
          </a-select>
        </a-col>
        <a-col :span="4" :offset="7" class="d-flex justify-content-end">
          <a-button v-if="testId" type="primary" @click="goBack"
            >Quay lại</a-button
          ><a-button v-else type="primary" @click="onAddQuestion"
            >Tạo câu hỏi</a-button
          >
        </a-col>
      </a-row>
    </div>
    <a-collapse expand-icon-position="right">
      <template #expandIcon>
        <a-icon type="caret-right" :rotate="90" />
      </template>
      <a-collapse-panel v-for="item in list" :key="item.id">
        <template #header>
          <a-row type="flex" justify="space-between">
            <a-col>
              <h4 v-html="item.content"></h4>
            </a-col>
            <a-col v-if="testId"
              ><a-button
                v-if="checkAddToExam(item.id)"
                type="primary"
                ghost
                @click.stop="onAddToExam(item.id)"
              >
                Thêm Vào Đề Thi</a-button
              >
              <a-button
                v-else
                type="danger"
                ghost
                @click.stop="onDeleteFromExam(item.id)"
              >
                Xóa Khỏi Đề Thi
              </a-button>
            </a-col>
            <a-col v-else
              ><a-button type="link" @click.stop="onEdit(item.id)">
                <a-icon type="edit"
              /></a-button>
              <a-button type="link" @click.stop="onClone(item.id)"
                ><a-icon type="copy"
              /></a-button>
              <a-button type="link" @click.stop="onDelete(item.id)">
                <a-icon type="delete" /></a-button
            ></a-col>
          </a-row>
        </template>
        <div class="box-white">
          <a-row>
            <a-col :span="10" :offset="2">
              <AnswerInfoMuliti
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
              <ListTest />
            </a-col>
            <a-col :span="12">
              <QuestionInfo
                :group="item.GroupQuestion.name"
                :type="item.type"
                :score="item.score"
                :createdAt="item.created_at"
              />
            </a-col>
          </a-row>
        </div>
      </a-collapse-panel>
    </a-collapse>
    <div class="mt-4 d-flex justify-content-end">
      <a-pagination
        v-model="pagination.currentPage"
        :total="total"
        :page-size="limit"
        show-less-items
        @change="onChangePaging"
      />
    </div>
  </div>
</template>

<script>
import AnswerInfoBoolean from "@/components/question/answerInfo/answerInfoBoolean";
import AnswerInfoFillBlank from "@/components/question/answerInfo/answerInfoFillBlank";
import AnswerInfoMatch from "@/components/question/answerInfo/answerInfoMatch";
import AnswerInfoMuliti from "@/components/question/answerInfo/answerInfoMuliti";
import QuestionInfo from "@/components/question/questionInfo";
import ListTest from "@/components/question/listTest";
import { mapFields } from "vuex-map-fields";
import { mapActions } from "vuex";
import { QUESTION_TYPE } from "@/constants/question";
import { LIST_SORT } from "@/constants/common";
import generate from "@/mixins/generate";
export default {
  name: "bank",
  mixins: [generate],
  components: {
    AnswerInfoBoolean: AnswerInfoBoolean,
    AnswerInfoFillBlank: AnswerInfoFillBlank,
    AnswerInfoMatch: AnswerInfoMatch,
    AnswerInfoMuliti: AnswerInfoMuliti,
    QuestionInfo: QuestionInfo,
    ListTest: ListTest,
  },
  data() {
    return {
      QUESTION_TYPE,
      LIST_SORT,
      keyword: "",
      sortBy: "recent",
      subjectId: null,
      testId: null,
      questions: [],
    };
  },
  computed: {
    ...mapFields("questionTag", {
      list: "list",
      pagination: "pagination",
      total: "pagination.total",
      limit: "pagination.limit",
    }),
  },
  mounted() {
    this.getList();
    this.testId = this.$route.query?.test_id;
    if (this.testId) {
      this.getListQuestionExam();
    }
  },
  watch: {
    sortBy() {
      this.onSearch();
    },
  },
  methods: {
    ...mapActions("bank", ["getPaging", "setPagination"]),
    ...mapActions("question", [
      "delete",
      "clones",
      "deleteQuestionToExam",
      "addQuestionToExam",
    ]),
    ...mapActions("testEdit", ["getByID"]),
    checkAddToExam(questionId) {
      if ((this.questions || []).find((item) => item.id == questionId)) {
        return false;
      }
      return true;
    },
    async onAddToExam(questionId) {
      const response = await this.addQuestionToExam({
        questionId: questionId,
        testId: this.testId,
      });

      if (response?.data?.code === "SUCCESS") {
        this.$notification["success"]({
          message: "Thêm thành công",
        });
        this.getListQuestionExam();
      } else {
        this.$notification["error"]({
          message: "Lôĩ khi thêm",
        });
      }
    },
    async onDeleteFromExam(questionId) {
      const response = await this.deleteQuestionToExam({
        questionId: questionId,
        testId: this.testId,
      });

      if (response?.data?.code === "SUCCESS") {
        this.$notification["success"]({
          message: "Xóa thành công",
        });
        this.getListQuestionExam();
      } else {
        this.$notification["error"]({
          message: "Lôĩ khi xóa",
        });
      }
    },
    async getListQuestionExam() {
      const response = await this.getByID({ id: this.testId });
      console.log("response", response?.data?.data);
      if (response?.data?.code === "SUCCESS") {
        this.questions = JSON.parse(
          JSON.stringify(response?.data?.data?.questions)
        );
      }
    },
    async onSearch() {
      await this.getList();
    },
    async getList(data = {}) {
      const params = {
        content: this.keyword.trim(),
        page: 1,
        limit: this.limit,
        sort_by: this.sortBy,
        ...data,
      };
      const response = await this.getPaging(params);
      if (response?.data?.code === "SUCCESS") {
        this.list = response?.data?.data?.rows;
        this.setPagination(response?.data?.data?.pagination);
      }
    },
    async onChangePaging(current) {
      const params = {
        page: current,
      };
      await this.getList(params);
    },
    onAddQuestion() {
      this.$router.push({
        path: "/questions/create/",
      });
    },
    onEdit(questionID) {
      this.$router.push({
        path: `/questions/${questionID}/edit/`,
      });
    },
    async onClone(questionID) {
      const response = await this.clones({ id: questionID });
      if (response?.data?.code === "SUCCESS") {
        this.$notification["success"]({
          message: "Sao chép thành công",
        });
        const params = {
          page: this.pagination.currentPage,
        };
        await this.getList(params);
      } else {
        this.$notification["error"]({
          message: "Lôĩ khi sao chép",
        });
      }
    },
    async onDelete(questionID) {
      const response = await this.delete({
        id: questionID,
      });

      if (response?.data?.code === "SUCCESS") {
        this.$notification["success"]({
          message: "Xóa thành công",
        });
        const params = {
          page: this.pagination.currentPage,
        };
        await this.getList(params);
      } else {
        this.$notification["error"]({
          message: "Lôĩ khi xóa",
        });
      }
    },
  },
};
</script>
