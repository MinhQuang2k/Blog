<template>
  <div class="box-white">
    <h4>Cài đặt</h4>
    <div class="mb-4">
      <h4>Điểm</h4>
      <a-input-number class="w-100" v-model="score" :min="0" :max="100" />
    </div>
    <div class="mb-4">
      <h4>Nhóm câu hỏi</h4>
      <a-select
        show-search
        placeholder="Select a person"
        option-filter-prop="children"
        class="wr-100"
        :filter-option="filterOption"
        v-model="questionTagId"
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
  data() {
    return {
      questionTags: [],
      questionTagId: null,
      score: 0,
    };
  },
  mounted() {
    this.getListQuestionTag();
  },
  watch() {},
  methods: {
    ...mapActions("questionTag", {
      getAll: "getAll",
    }),
    async getListQuestionTag() {
      const response = await this.getAll();
      this.questionTags = response?.data?.data || [];
    },
  },
};
</script>
