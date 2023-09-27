<template>
  <a-modal
    title="Tạo danh sách mã"
    :visible="visible"
    @ok="onSave"
    @cancel="onClose"
    cancelText="Hủy"
    okText="Lưu"
  >
    <div class="d-flex justify-content-between mb-4">
      <h4>Nhập mã</h4>
      <a-button type="primary" @click="onAddCodeAuto">Tạo mã tự động</a-button>
    </div>
    <a-textarea :rows="6" v-model="accessCode" />
  </a-modal>
</template>
<script>
import { mapActions } from "vuex";
import { mapFields } from "vuex-map-fields";
export default {
  name: "ModalAdd",
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
    limitCode: {
      type: Number | String,
      default: 1,
    },
  },
  data() {
    return {
      visible: false,
      accessCode: "",
    };
  },
  computed: {
    ...mapFields("roomSetting", {
      accessCodes: "setting.accessCodes",
    }),
  },
  watch: {
    isShow(val) {
      this.visible = val;
    },
  },
  methods: {
    ...mapActions("roomSetting", ["getCodeRoom"]),
    onClose() {
      this.onReset();
      this.$emit("update:isShow", false);
    },
    onSave() {
      this.accessCodes = this.accessCode.split("\n");
      this.onClose();
    },
    onReset() {
      this.accessCode = "";
    },
    async onAddCodeAuto() {
      const params = {
        limit: 10,
      };
      const response = await this.getCodeRoom(params);
      if (response?.data?.code === "SUCCESS") {
        const newListCode = (response?.data?.data || []).join("\n");
        if (this.accessCode) {
          this.accessCode = this.accessCode + "\n" + newListCode;
        } else {
          this.accessCode = newListCode;
        }
      }
    },
  },
};
</script>
