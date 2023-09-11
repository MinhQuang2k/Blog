<template>
  <div class="box-white mb-4">
    <h4>Câu hỏi</h4>
    <div v-if="isShowQuestion" class="d-flex justify-content-between">
      <div v-html="convertToHTML(content)"></div>
      <div class="text-right wr-100">
        <a-button type="link" @click="onEdit"><a-icon type="edit" /></a-button>
      </div>
    </div>
    <div v-else>
      <TinyMCE :value.sync="content" @change="onChange" type="big" />
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
import { mapFields } from "vuex-map-fields";
export default {
  name: "QuestionFillBlank",
  computed: {
    ...mapFields("question", {
      content: "content",
      correctAnswers: "fillBlankCorrectAnswers",
    }),
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
      this.isShowQuestion = true;
      var regex = /\[(.*?)\]/g;
      var matches = this.content.match(regex) || [];
      this.correctAnswers = this.correctAnswers.filter(
        (item) => item.key <= matches.length
      );
      for (var i = 1; i <= matches.length; i++) {
        if (!this.correctAnswers.find((item) => item.key === i)) {
          this.correctAnswers = [
            ...this.correctAnswers,
            {
              key: i,
              content: [""],
            },
          ];
        }
      }
    },
    onEdit() {
      this.isShowQuestion = false;
    },
    convertToHTML(input = "") {
      var regex = /\[(.*?)\]/g;
      var matches = input.match(regex) || [];

      for (var i = 0; i < matches.length; i++) {
        var replacement =
          "<b>" + matches[i].replace("[%", "_").replace("%]", "_") + "</b>";
        input = input.replace(matches[i], replacement);
      }
      return input;
    },
    onChange(value) {
      this.content = value;
    },
  },
};
</script>
