<template>
  <a-modal
    title="Sửa nhóm"
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
  name: "ModalEdit",
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: "",
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
    value(val) {
      if (val) {
        this.name = val;
      }
    },
  },
  methods: {
    onClose() {
      this.onReset();
      this.$emit("update:isShow", false);
    },
    onSave() {
      this.$emit("onSave", {
        name: this.name,
      });
      this.onClose();
    },
    onReset() {
      this.name = "";
    },
  },
};
</script>
