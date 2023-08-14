<template>
  <div>
    <div class="box-white">
      <a-row>
        <a-col :span="8" class="box-search">
          <a-input class="input-search" placeholder="Search" />
          <a-icon type="search" class="icon-search" />
        </a-col>
        <a-col :span="5" class="pl-4">
          <a-auto-complete
            :data-source="dataSource"
            placeholder="Chọn thẻ câu hỏi"
            :filter-option="filterOption"
            class="auto-complete"
          />
        </a-col>
      </a-row>
    </div>
    <a-collapse v-model="activeKeys" expand-icon-position="right">
      <a-collapse-panel key="1" :showArrow="false" :disabled="true">
        <template #header>
          <a-row type="flex" justify="space-between">
            <a-col>
              <h4>Chon đáp án</h4>
            </a-col>
            <a-col>
              <a-button type="primary" @click="onSeeMore('1')">{{
                isSeeMore("1") ? "Xem thêm" : "Thu gọn"
              }}</a-button>
              <a-button type="primary">
                <a-icon type="plus-circle" /> Thêm</a-button
              >
            </a-col>
          </a-row>
        </template>
        <div class="box-white">
          <a-row>
            <a-col :span="10" :offset="2">
              <AnswerInfoBoolean />
            </a-col>
            <a-col :span="12">
              <QuestionInfo />
            </a-col>
          </a-row>
        </div>
      </a-collapse-panel>
      <a-collapse-panel key="2" :showArrow="false" :disabled="true">
        <template #header>
          <a-row type="flex" justify="space-between">
            <a-col>
              <h4>Chon đáp án</h4>
            </a-col>
            <a-col>
              <a-button type="primary" @click="onSeeMore('2')">{{
                isSeeMore("2") ? "Xem thêm" : "Thu gọn"
              }}</a-button>
              <a-button type="primary">
                <a-icon type="plus-circle" /> Thêm</a-button
              >
            </a-col>
          </a-row>
        </template>
        <div class="box-white">
          <a-row>
            <a-col :span="10" :offset="2">
              <AnswerInfoBoolean />
            </a-col>
            <a-col :span="12">
              <QuestionInfo />
            </a-col>
          </a-row>
        </div>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script>
export default {
  name: "sampleQuestion",

  data() {
    return {
      current: 2,
      dataSource: ["Burns Bay Road", "Downing Street", "Wall Street"],
      activeKeys: [],
      isActive: false,
    };
  },
  methods: {
    selectSubject(value) {
      console.log(`selected ${value}`);
    },
    selectGroupQuestion(value) {
      console.log(`selected ${value}`);
    },
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text
          .toUpperCase()
          .indexOf(input.toUpperCase()) >= 0
      );
    },
    onSeeMore(keys) {
      if (this.activeKeys.includes(keys)) {
        this.activeKeys = this.activeKeys.filter((item) => item != keys);
      } else {
        this.activeKeys.push(keys);
      }
    },
    isSeeMore(keys) {
      if (this.activeKeys.includes(keys)) {
        return false;
      }
      return true;
    },
  },
};
</script>
