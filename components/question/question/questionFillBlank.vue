<template>
  <div class="box-white mb-4">
    <h4>Câu hỏi</h4>
    <div v-if="isShowQuestion" class="d-flex justify-content-between">
      <div class="df-1" v-html="convertToHTML(content)"></div>
      <div class="text-right">
        <a-button type="link" @click="onEdit"><a-icon type="edit" /></a-button>
      </div>
    </div>
    <div v-else>
      <TinyMCE :value="content" @change="onChange" type="big" />
      <p>
        <b>Hướng dẫn</b> Để tạo chỗ trống tại vị trí con trỏ chuột của bạn, hãy
        nhập theo định dạng sau [%Tên_chỗ_trống%]. Tên chỗ trống chỉ nhập số,
        không được nhập chữ cái và các ký tự đặc biệt
      </p>
      <p>Ví dụ: Điền đáp án vào chỗ trống</p>
      <p>Công cha như núi thái [%1%]</p>
      <p>[%2%] như nước trong nguồn chảy ra</p>
      <div class="d-flex justify-content-end">
        <a-button type="primary" @click="onSave"
          >Lưu và cài đặt đáp án</a-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import generate from "@/mixins/generate";
export default {
  name: "QuestionFillBlank",
  mixins: [generate],
  props: {
    content: {
      type: String,
      default: "",
    },
    correctAnswers: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isShowQuestion: true,
    };
  },
  mounted() {
    if (this.content) {
      this.isShowQuestion = true;
    } else {
      this.isShowQuestion = false;
    }
  },
  methods: {
    onSave() {
      var regex = /\[(.*?)\]/g;
      var matches = this.content.match(regex) || [];
      if (!matches.length) {
        this.$notification["error"]({
          message: "Lỗi không tìm thấy đáp án nào",
        });
        return;
      } else {
        this.isShowQuestion = true;
      }
      let newCorrectAnswers = this.correctAnswers.filter(
        (item) => item.key <= matches.length
      );
      for (var i = 1; i <= matches.length; i++) {
        if (!newCorrectAnswers.find((item) => item.key === i)) {
          newCorrectAnswers = [
            ...newCorrectAnswers,
            {
              key: i,
              content: [""],
            },
          ];
        }
      }
      this.$emit("update:correctAnswers", newCorrectAnswers);
    },
    onEdit() {
      this.isShowQuestion = false;
    },
    onChange(value) {
      this.$emit("update:content", value);
    },
  },
};
</script>
