<template>
  <div class="box-white mb-4">
    <h4>Đáp án</h4>
    <a-radio-group
      :value="correctAnswer"
      @change="onChangeResult"
      class="wr-100"
    >
      <div
        v-for="item in answers"
        :key="item.id"
        class="d-flex align-items-center my-3"
      >
        <a-radio :value="item.id" class="mr-3"></a-radio>
        <div class="mr-3">{{ upperCaseAnswer(item.id) }}</div>
        <TinyMCE
          :value="item.content"
          @change="onChangeAnswer($event, item.id)"
        />
        <a-button type="link" disabled><a-icon type="close-circle" /></a-button>
      </div>
    </a-radio-group>
  </div>
</template>

<script>
import generate from "~/mixins/generate";
import TinyMCE from "@/components/global/TinyMCE";
export default {
  name: "AnswerBoolean",
  mixins: [generate],
  components: [TinyMCE],
  props: {
    answers: {
      type: Array,
      default: () => [],
    },
    correctAnswer: {
      type: String,
      default: "",
    },
  },
  methods: {
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
    onChangeResult(event) {
      this.$emit("update:correctAnswer", event.target.value);
    },
  },
};
</script>
