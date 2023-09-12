<template>
  <v-tinymce
    api-key="b3m4owtz9mxa6zl1otn948snen4m5np54rm3w5s6a5zny4kz"
    cloudChannel="5-stable"
    :value="value"
    @input="onChange"
    :inline="true"
    :class="type"
    :init="config"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "small",
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      config: {
        menubar: false,
        placeholder: "Nhập nội dung",
        plugins: [
          "advlist autolink lists link charmap preview anchor",
          "searchreplace visualblocks code fullscreen",
          "insertdatetime table paste help autoresize",
        ],
        toolbar_mode: "sliding",
        toolbar:
          " bold italic underline | forecolor backcolor casechange " +
          " permanentpen formatpainter | numlist bullist checklist | " +
          " pageembed template link |alignleft aligncenter alignright alignjustify |  ",
      },
    };
  },
  mounted() {
    if (this.type === "small") {
      this.config = {
        ...this.config,
        setup: function (editor) {
          editor.on("keydown", function (e) {
            var keyCode = e.keyCode || e.which;

            if (keyCode === 13) {
              e.preventDefault();
              e.stopPropagation();
            }
          });
        },
      };
    }
  },
  methods: {
    onChange(val) {
      console.log("onChange", onChange);
      this.$emit("change", val);
    },
  },
};
</script>
<style lang="scss">
.mce-content-body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-variant: tabular-nums;
  list-style: none;
  font-feature-settings: "tnum", "tnum";
  position: relative;
  display: inline-block;
  width: 100%;
  padding: 4px 11px;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  line-height: 1.5;
  background-color: #fff;
  background-image: none;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  transition: all 0.3s;
}

.small.mce-content-body {
  height: 32px;
  overflow-y: hidden;
}

.big.mce-content-body {
  height: 144px;
  overflow-y: auto;
}

.mce-content-body:before {
  padding: 0px 11px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.25) !important;
}

.mce-content-body:hover {
  border-color: #40a9ff;
}

.mce-edit-focus {
  border-color: #40a9ff;
  outline: 0;
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
}
</style>
