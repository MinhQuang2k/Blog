<template>
  <div class="box-white mb-4">
    <h4>Câu hỏi</h4>
    <div class="c-form-item">
      <span
        class="c-tooltip-error"
        :class="{ 'is-show': $v.content.$dirty && $v.content.$error }"
        >Trường thông tin không được để trống
      </span>

      <TinyMCE
        :value="content"
        @change="onChange"
        type="big"
        :clazz="
          $v.content.$dirty && $v.content.$error ? 'is-error-wrapper' : ''
        "
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Question",
  props: {
    content: {
      type: String,
      default: "",
    },
  },
  inject: ["$v"],
  methods: {
    onChange(value) {
      this.$emit("update:content", value);
    },
  },
};
</script>
