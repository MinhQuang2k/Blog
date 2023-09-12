<template>
  <div class="box-white">
    <h4>Cài đặt</h4>
    <div class="mb-4">
      <h4>Điểm</h4>
      <a-input-number
        class="wr-100"
        :value="score"
        @change="onChangeScore"
        :min="0"
        :max="100"
      />
    </div>
    <div class="mb-4">
      <h4>Nhóm câu hỏi</h4>
      <a-select
        show-search
        placeholder="Select a person"
        option-filter-prop="children"
        class="wr-100"
        :filter-option="filterOption"
        :value="tagId"
        @change="onChangeTag"
      >
        <a-select-option
          v-for="item in questionTags"
          :value="item.id"
          :key="item.id"
        >
          {{ item.name }}
        </a-select-option>
      </a-select>
    </div>
  </div>
</template>

<script>
import generate from "~/mixins/generate";
import { mapActions } from "vuex";
export default {
  name: "Setting",
  mixins: [generate],
  props: {
    tagId: {
      type: Number,
      default: null,
    },
    score: {
      type: Number | String,
      default: 0,
    },
  },
  data() {
    return {
      questionTags: [],
    };
  },
  mounted() {
    this.getListQuestionTag();
  },
  methods: {
    ...mapActions("questionTag", ["getAll"]),
    async getListQuestionTag() {
      const response = await this.getAll();
      this.questionTags = response?.data?.data || [];
    },
    onChangeScore(value) {
      this.$emit("update:score", value);
    },
    onChangeTag(value) {
      this.$emit("update:tagId", value);
    },
  },
};
</script>
