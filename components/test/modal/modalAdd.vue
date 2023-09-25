<template>
  <a-modal
    :title="isUpdate ? 'Cập nhật đề thi' : 'Tạo đề thi'"
    :visible="visible"
    @ok="onSave"
    @cancel="onClose"
    cancelText="Hủy"
    :okText="isUpdate ? 'Cập Nhật' : 'Tạo'"
  >
    <div class="mb-4">
      <h4>Tên đề thi</h4>
      <div class="c-form-item">
        <span
          class="c-tooltip-error"
          :class="{ 'is-show': $v.name.$dirty && $v.name.$error }"
          >Trường thông tin không được để trống
        </span>
        <a-input
          v-model="name"
          placeholder="Nhập tên đề thi"
          :class="{
            'is-error': $v.name.$dirty && $v.name.$error,
          }"
        />
      </div>
    </div>
    <div class="mb-4">
      <h4>Thời gian làm bài (phút)</h4>
      <div class="c-form-item">
        <span
          class="c-tooltip-error"
          :class="{ 'is-show': $v.timeLimit.$dirty && $v.timeLimit.$error }"
          >Trường thông tin không được để trống
        </span>
        <a-input
          v-model="timeLimit"
          type="number"
          :class="{
            'is-error': $v.timeLimit.$dirty && $v.timeLimit.$error,
          }"
        />
      </div>
    </div>
    <div class="mb-4">
      <h4>Nhóm đề thi</h4>
      <div class="c-form-item">
        <span
          class="c-tooltip-error"
          :class="{ 'is-show': $v.subjectId.$dirty && $v.subjectId.$error }"
          >Trường thông tin không được để trống
        </span>
        <a-select
          class="wr-100"
          v-model="subjectId"
          :class="{
            'is-error': $v.subjectId.$dirty && $v.subjectId.$error,
          }"
        >
          <a-select-opt-group
            v-for="item in categories"
            :key="item.id"
            :label="item.name"
          >
            <a-select-option
              v-for="sub in item.subjects"
              :key="sub.id"
              :value="sub.id"
            >
              {{ sub.name }}
            </a-select-option>
          </a-select-opt-group>
        </a-select>
      </div>
    </div>
    <div class="mb-4">
      <h4>Cài đặt hiển thị</h4>
      <a-radio-group v-model="type">
        <a-radio
          v-for="item in LIST_TYPE_EXAM"
          :key="item.value"
          :value="item.value"
        >
          {{ item.text }}
        </a-radio>
      </a-radio-group>
    </div>
    <div>
      <h4>Đổi vị trí câu hỏi</h4>
      <a-switch default-checked v-model="shuffleQuestion" />
    </div>
    <div class="mb-4">
      <h4>Mô tả</h4>
      <a-textarea
        v-model="description"
        placeholder="Thông tin này có thể để trống"
        :rows="4"
      />
    </div>
  </a-modal>
</template>

<script>
import { TYPE_EXAM, LIST_TYPE_EXAM } from "@/constants/exam";
import { required } from "vuelidate/lib/validators";
import { isEmpty } from "lodash";
export default {
  name: "ModalAdd",
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
    categories: {
      type: Array,
      default: () => [],
    },
    typeEdit: {
      type: Boolean,
      default: false,
    },
    dataEdit: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      LIST_TYPE_EXAM,
      TYPE_EXAM,
      visible: false,
      name: "",
      timeLimit: 0,
      description: "",
      shuffleQuestion: false,
      type: TYPE_EXAM.ONE_QUESTION_PAGE,
      subjectId: null,
      isUpdate: false,
    };
  },
  validations() {
    return {
      name: {
        required,
      },
      timeLimit: {
        required,
      },
      subjectId: {
        required,
      },
    };
  },
  watch: {
    isShow(val) {
      this.visible = val;
      if (val && !isEmpty(this.dataEdit)) {
        this.name = this.dataEdit.name;
        this.timeLimit = this.dataEdit.timeLimit;
        this.description = this.dataEdit.description;
        this.shuffleQuestion = this.dataEdit.shuffleQuestion;
        this.type = this.dataEdit.type;
        this.subjectId = this.dataEdit.subjectId;
        this.isUpdate = true;
      }
    },
  },
  methods: {
    onClose() {
      this.onReset();
      this.$emit("update:isShow", false);
    },
    onSave() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.$emit("onSave", {
          name: this.name,
          time_limit: Number(this.timeLimit),
          description: this.description,
          shuffle_question: this.shuffleQuestion,
          type: this.type,
          subject_id: this.subjectId,
        });
        this.onClose();
      }
    },
    onReset() {
      this.name = "";
      this.timeLimit = 0;
      this.description = "";
      this.shuffleQuestion = false;
      this.type = TYPE_EXAM.ONE_QUESTION_PAGE;
      this.subjectId = null;
      this.isUpdate = false;
      this.$v.$reset();
    },
  },
};
</script>
