<template>
  <a-modal
    title="Thêm nhóm con mới"
    :visible="visible"
    @ok="onSave"
    @cancel="onClose"
    cancelText="Hủy"
    okText="Lưu"
  >
    <h4>Nhập tên nhóm</h4>
    <a-input v-model="name" />
  </a-modal>
</template>

<script>
export default {
  name: "ModalAddSub",
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      visible: false,
      name: "",
    };
  },
  watch: {
    isShow(val) {
      this.visible = val;
    },
  },
  methods: {
    onClose() {
      this.onReset();
      this.$emit("update:isShow", false);
    },
    onSave() {
      this.$emit("onSave", { name: this.name });
      this.onClose();
    },
    onReset() {
      this.name = "";
    },
  },
};
</script>
