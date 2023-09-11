<template>
  <div class="box-white mb-4">
    <h4>Câu hỏi</h4>
    <TinyMCE :value.sync="content" @change="onChange" type="big" />
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
  methods: {
    onChange(value) {
      this.content = value;
    },
  },
};
</script>
