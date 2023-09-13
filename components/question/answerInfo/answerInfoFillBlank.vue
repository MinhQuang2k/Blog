<template>
  <div>
    <p v-html="convertToHTML(content)"></p>
    <h4>Đáp án</h4>
    <div
      v-for="item in correctAnswers"
      :key="item.key"
      class="d-flex align-items-center"
    >
      <div>
        <span class="mr-4"> {{ item.key }}</span
        ><span
          v-for="(answer, index) in item.content"
          :key="index"
          class="mr-2 badge bg-green"
          >{{ answer }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import generate from "@/mixins/generate";
export default {
  name: "AnswerInfoFillBlank",
  mixins: [generate],
  props: {
    content: {
      type: String,
      default:
        "Công cha như núi thái [%1%]<br />[%2%] như nước trong nguồn chảy ra",
    },
    correctAnswers: {
      type: Array,
      default: () => [
        { key: 1, content: ["son", "ok"] },
        { key: 2, content: ["Nghia me"] },
      ],
    },
  },
};
</script>
