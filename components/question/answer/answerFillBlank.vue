<template>
  <div class="box-white mb-4">
    <h4>Đáp án</h4>
    <p>- Hệ thống không phân biệt in hoa, in thường.</p>
    <p>
      - Để ghi nhận nhiều hơn một đáp án đúng, vui lòng ngăn cách các đáp án
      bằng dấu chấm phẩy
    </p>
    <div>
      <div
        v-for="item in correctAnswers"
        :key="item.key"
        class="d-flex align-items-center my-3"
      >
        <div class="mr-3">
          <b>{{ item.key }}.</b>
        </div>
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
import generate from "~/mixins/generate";
import TinyMCE from "@/components/global/TinyMCE";
export default {
  name: "AnswerFillBlank",
  mixins: [generate],
  components: [TinyMCE],
  props: {
    correctAnswers: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    onChange(event, key) {
      this.$emit(
        "update:correctAnswers",
        this.correctAnswers.map((item) => {
          if (item.key === key) {
            return {
              key: key,
              content: event.target.value,
            };
          }
          return item;
        })
      );
    },
  },
};
</script>
