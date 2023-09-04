<template>
  <div class="box-white mb-4">
    <h4>Câu hỏi</h4>
    <a-textarea v-model="content" placeholder="Nhập nội dung" :rows="7" />
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
export default {
  name: "Question",
  data() {
    return {};
  },
  computed: {
    ...mapFields("question", {
      content: "content",
    }),
  },
  methods: {},
};
</script>
