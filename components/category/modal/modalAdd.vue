<template>
  <a-modal
    title="Tạo nhóm mới"
    :visible="visible"
    @ok="onSave"
    @cancel="onClose"
    cancelText="Hủy"
    okText="Lưu"
  >
    <h4>Tên nhóm</h4>
    <a-input v-model="name" placeholder="Nhập vào nội dung" class="mb-4" />
    <h4>Tên danh mục con</h4>
    <div class="mb-1">
      <a-input
        v-for="(item, index) in listChild"
        :key="index"
        v-model="item.name"
        placeholder="Nhập vào nội dung"
        class="mb-3"
      />
    </div>
    <a-button type="primary" @click="onAddSub">Thêm danh mục con</a-button>
  </a-modal>
</template>

<script>
export default {
  name: "ModalAdd",
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      visible: false,
      listChild: [
        {
          name: "",
        },
      ],
      name: "",
    };
  },
  watch: {
    isShow(val) {
      this.visible = val;
    },
  },
  methods: {
    onAddSub() {
      this.listChild.push({
        name: "",
      });
    },
    onClose() {
      this.onReset();
      this.$emit("update:isShow", false);
    },
    onSave() {
      const subjects = Array.from(
        new Set(this.listChild.map((item) => item.name))
      ).filter((item) => item.trim());
      this.$emit("onSave", {
        name: this.name,
        subjects: subjects.map((item) => ({
          name: item,
        })),
      });
      this.onClose();
    },
    onReset() {
      this.name = "";
      this.listChild = [
        {
          name: "",
        },
      ];
    },
  },
};
</script>
