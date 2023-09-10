<template>
  <editor
    api-key="b3m4owtz9mxa6zl1otn948snen4m5np54rm3w5s6a5zny4kz"
    cloudChannel="5-stable"
    @selectionChange="onChange"
    :inline="true"
    :init="{
      menubar: false,
      placeholder: 'Nhập nội dung',
      plugins: [
        'advlist autolink lists link charmap preview anchor',
        'searchreplace visualblocks code fullscreen',
        'insertdatetime table paste help autoresize',
      ],
      toolbar_mode: 'sliding',
      toolbar:
        ' bold italic underline | forecolor backcolor casechange ' +
        ' permanentpen formatpainter | numlist bullist checklist | ' +
        ' pageembed template link |alignleft aligncenter alignright alignjustify |  ',
    }"
  />
</template>

<script>
export default {
  data() {
    return {
      content: "",
    };
  },
  methods: {
    onChange(value) {
      console.log("onChange", value);
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
  height: 32px;
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
