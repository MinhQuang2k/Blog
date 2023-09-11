<template>
  <div class="box-white">
    <h4>Giải thích đáp án</h4>
    <TinyMCE :value.sync="noteAnswer" @change="onChange" type="big" />
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
  methods: {
    onChange(value) {
      this.noteAnswer = value;
    },
  },
};
</script>
