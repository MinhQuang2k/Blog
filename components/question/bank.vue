<template>
  <div>
    <div class="box-white">
      <a-row type="flex" justify="space-between">
        <a-col :span="8" class="box-search">
          <a-input class="input-search" placeholder="Search" />
          <a-icon type="search" class="icon-search" />
        </a-col>
        <a-col :span="5" class="pl-4">
          <a-select
            class="select"
            default-value="new"
            @change="selectGroupQuestion"
          >
            <a-select-option value="recent"> Tạo gần đây </a-select-option>
            <a-select-option value="alphabet"> A-Z </a-select-option>
          </a-select>
        </a-col>
        <a-col :span="4" :offset="7" class="d-flex justify-content-end"
          ><a-button type="primary" @click="onAddQuestion"
            >Tạo câu hỏi</a-button
          ></a-col
        >
      </a-row>
    </div>
    <a-collapse default-active-key="1" expand-icon-position="right">
      <template #expandIcon>
        <a-icon type="caret-right" :rotate="90" />
      </template>
      <a-collapse-panel key="2">
        <template #header>
          <a-row type="flex" justify="space-between">
            <a-col>
              <h4>Chon đáp án</h4>
            </a-col>
            <a-col
              ><a-button type="link"> <a-icon type="edit" /></a-button>
              <a-button type="link"><a-icon type="copy" /></a-button>
              <a-button type="link"> <a-icon type="delete" /></a-button
            ></a-col>
          </a-row>
        </template>
        <div class="box-white">
          <a-row>
            <a-col :span="10" :offset="2">
              <AnswerInfoMuliti />
              <ListTest />
            </a-col>
            <a-col :span="12">
              <QuestionInfo />
            </a-col>
          </a-row>
        </div>
      </a-collapse-panel>
    </a-collapse>
    <a-collapse default-active-key="1" expand-icon-position="right">
      <template #expandIcon>
        <a-icon type="caret-right" :rotate="90" />
      </template>
      <a-collapse-panel key="2">
        <template #header>
          <a-row type="flex" justify="space-between">
            <a-col>
              <h4>Điền từ</h4>
            </a-col>
            <a-col
              ><a-button type="link"> <a-icon type="edit" /></a-button>
              <a-button type="link"><a-icon type="copy" /></a-button>
              <a-button type="link"> <a-icon type="delete" /></a-button
            ></a-col>
          </a-row>
        </template>
        <div class="box-white">
          <a-row>
            <a-col :span="10" :offset="2">
              <AnswerInfoFillWord />
              <ListTest />
            </a-col>
            <a-col :span="12">
              <QuestionInfo />
            </a-col>
          </a-row>
        </div>
      </a-collapse-panel>
    </a-collapse>
    <a-collapse default-active-key="1" expand-icon-position="right">
      <template #expandIcon>
        <a-icon type="caret-right" :rotate="90" />
      </template>
      <a-collapse-panel key="2">
        <template #header>
          <a-row type="flex" justify="space-between">
            <a-col>
              <h4>Nối</h4>
            </a-col>
            <a-col
              ><a-button type="link"> <a-icon type="edit" /></a-button>
              <a-button type="link"><a-icon type="copy" /></a-button>
              <a-button type="link"> <a-icon type="delete" /></a-button
            ></a-col>
          </a-row>
        </template>
        <div class="box-white">
          <a-row>
            <a-col :span="10" :offset="2">
              <AnswerInfoMatch />
              <ListTest />
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
  name: "bank",

  data() {
    return {
      current: 2,
    };
  },
  methods: {
    onAddQuestion() {
      this.$router.push({
        path: "/questions/create",
      });
    },
    selectSubject(value) {
      console.log(`selected ${value}`);
    },
    selectGroupQuestion(value) {
      //sort_by
      console.log(`selected ${value}`);
    },
  },
};
</script>
