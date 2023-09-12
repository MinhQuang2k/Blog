<template>
  <div class="box-white">
    <h4>Giải thích đáp án</h4>
    <TinyMCE :value="noteAnswer" @change="onChange" type="big" />
  </div>
</template>

<script>
export default {
  name: "Note",
  props: {
    noteAnswer: {
      type: String,
      default: "",
    },
  },
  methods: {
    onChange(value) {
      this.$emit("update:noteAnswer", value);
    },
  },
};
</script>
