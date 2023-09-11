<template>
  <a-modal
    title="Di chuyển danh mục con"
    :visible="visible"
    @ok="onSave"
    @cancel="onClose"
    cancelText="Hủy"
    okText="Lưu"
  >
    <h4>Chọn nhóm di chuyển cho danh mục con DEF</h4>
    <a-row>
      <a-col :span="11">
        <h4>Nhóm hiện tại</h4>
        <a-input v-model="categoryName" :disabled="true" />
      </a-col>
      <a-col :span="11" :offset="2">
        <h4>ABC Nhóm mới</h4>
        <a-select
          show-search
          placeholder="Select a person"
          option-filter-prop="children"
          :filter-option="filterOption"
          v-model="categoryIdNew"
          class="wr-100"
        >
          <a-select-option
            v-for="item in listOptions"
            :key="item.id"
            :value="item.id"
          >
            {{ item.name }}
          </a-select-option>
        </a-select>
      </a-col>
    </a-row>
  </a-modal>
</template>

<script>
import generate from "~/mixins/generate";
import { mapActions } from "vuex";

export default {
  name: "ModalMove",
  mixins: [generate],
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
    categoryId: {
      type: Number,
      default: null,
    },
    categoryName: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      visible: false,
      categoryIdNew: null,
      listOptions: [],
    };
  },
  watch: {
    isShow(val) {
      this.visible = val;
      if (val) {
        return this.getListOption();
      }
    },
  },
  methods: {
    ...mapActions("category", ["getAll"]),
    onClose() {
      this.onReset();
      this.$emit("update:isShow", false);
    },
    onSave() {
      this.$emit("onSave", {
        category_id: this.categoryId,
        new_category_id: this.categoryIdNew,
      });
      this.onClose();
    },
    onReset() {
      this.categoryIdNew = null;
    },
    async getListOption() {
      const response = await this.getAll();
      const list = response?.data?.data || [];
      this.listOptions = list.filter((item) => item.id !== this.categoryId);
    },
  },
};
</script>
