<template>
  <div class="box-white mb-4">
    <h4>Đáp án</h4>
    <p>- Hệ thống không phân biệt in hoa, in thường.</p>
    <p>
      - Để ghi nhận nhiều hơn một đáp án đúng, vui lòng ngăn cách các đáp án
      bằng dấu chấm phẩy
    </p>
    <div class="d-flex align-items-center my-3">
      <div v-for="item in correctAnswers" :key="item.key">
        <div class="mr-3">{{ item.key }}</div>
        <a-input
          :value="item.content"
          @input="onChange($event, item.key)"
          placeholder="Nhập nội dung"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
import generate from "~/mixins/generate";
export default {
  name: "AnswerFillBlank",
  mixins: [generate],
  computed: {
    ...mapFields("question", {
      correctAnswers: "correctAnswerBoolean",
    }),
  },
  methods: {
    onChange(event, key) {
      this.correctAnswers = this.correctAnswers.map((item) => {
        if (item.key === key) {
          return {
            key: key,
            content: event.target.value,
          };
        }
        return item;
      });
    },
  },
};
</script>
