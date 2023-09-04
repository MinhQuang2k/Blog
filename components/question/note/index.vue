<template>
  <div class="box-white">
    <h4>Giải thích đáp án</h4>
    <a-textarea v-model="noteAnswer" placeholder="Nhập nội dung" :rows="8" />
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
export default {
  name: "Note",
  computed: {
    ...mapFields("question", {
      noteAnswer: "noteAnswer",
    }),
  },
  methods: {},
};
</script>
