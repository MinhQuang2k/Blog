<template>
  <div>
    <h4>Thông tin câu hỏi</h4>
    <a-row class="mt-3">
      <a-col :span="5">Nhóm câu hỏi</a-col>
      <a-col>{{ group }}</a-col>
    </a-row>
    <a-row class="mt-2">
      <a-col :span="5">Kiểu câu hỏi</a-col>
      <a-col>{{ QUESTION_TYPE_NAME[type] }}</a-col>
    </a-row>
    <a-row class="mt-2">
      <a-col :span="5">Điểm</a-col>
      <a-col>{{ score }}</a-col>
    </a-row>
    <a-row class="mt-2">
      <a-col :span="5">Ngày tạo</a-col>
      <a-col>{{ $dayjs(createdAt).format(DATE_TIME) }}</a-col>
    </a-row>
  </div>
</template>

<script>
import { DATE_TIME } from "@/constants/common";
import { QUESTION_TYPE_NAME } from "@/constants/question";
export default {
  name: "QuestionInfo",
  props: {
    group: {
      type: String,
      default: "",
    },
    type: {
      type: Number,
      default: 0,
    },
    score: {
      type: Number,
      default: 0,
    },
    createdAt: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      DATE_TIME,
      QUESTION_TYPE_NAME,
    };
  },
};
</script>
