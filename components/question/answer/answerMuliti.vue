<template>
  <div class="box-white mb-4">
    <h4>Đáp án</h4>
    <a-checkbox-group
      :value="correctAnswers"
      @change="onChangeResult"
      class="wr-100"
    >
      <div
        v-for="v in $v.answersMuliti.$each.$iter"
        :key="v.$model.id"
        class="d-flex align-items-center my-3"
      >
        <a-checkbox :value="v.$model.id" class="mr-3"></a-checkbox>
        <div class="mr-3">{{ upperCaseAnswer(v.$model.id) }}</div>
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
          @click="onDelete(v.$model.id)"
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
import generate from "~/mixins/generate";
import { CODE_CHAR_START } from "~/constants/question";
import TinyMCE from "@/components/global/TinyMCE";
export default {
  name: "AnswerMuliti",
  mixins: [generate],
  components: [TinyMCE],
  data() {
    return {
      CODE_CHAR_START,
    };
  },
  props: {
    answers: {
      type: Array,
      default: () => [],
    },
    correctAnswers: {
      type: Array,
      default: () => [],
    },
  },
  inject: ["$v"],
  methods: {
    onChangeResult(value) {
      this.$emit("update:correctAnswers", value);
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
    onDelete(id) {
      this.$emit(
        "update:correctAnswers",
        this.correctAnswers
          .filter((item) => item !== id)
          .map((item) => {
            if (item.charCodeAt(0) > id.charCodeAt(0)) {
              return String.fromCharCode(item.charCodeAt(0) - 1);
            }
            return item;
          })
      );
      this.$emit(
        "update:answers",
        this.answers
          .filter((item) => item.id != id)
          .map((item, index) => ({
            ...item,
            id: String.fromCharCode(index + CODE_CHAR_START),
          }))
      );
    },
    onAdd() {
      this.$emit("update:answers", [
        ...this.answers,
        {
          id: String.fromCharCode(this.answers.length + CODE_CHAR_START),
          content: "",
        },
      ]);
    },
  },
};
</script>
