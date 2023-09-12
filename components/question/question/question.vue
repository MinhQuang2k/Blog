<template>
  <div class="box-white mb-4">
    <h4>Câu hỏi</h4>
    <TinyMCE :value="content" @change="onChange" type="big" />
  </div>
</template>

<script>
export default {
  name: "Question",
  data() {
    return {};
  },
  props: {
    content: {
      type: String,
      default: "",
    },
  },
  methods: {
    onChange(value) {
      this.$emit("update:content", value);
    },
  },
};
</script>
