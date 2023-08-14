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
            placeholder="Chọn thẻ đề thi"
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
              <h4>Đề Test Kỹ Sư Mạng Máy Tính</h4>
              <div class="d-flex align-items-center">
                <div class="d-flex align-items-center mr-4">
                  <a-icon type="calendar" class="mr-2" />
                  <div>26/07/2023</div>
                </div>
                <div class="d-flex align-items-center mr-4">
                  <a-icon type="question-circle" class="mr-2" />
                  <div>24 Câu hỏi</div>
                </div>
              </div>
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
          <i>Xem trước 5 câu hỏi</i>
          <div>
            <b>Câu 1:</b> Một mạng con lớp C cần chứa tối thiểu 15 host, sử dụng
            Subnet Mask nào sau đây:
          </div>
          <div>
            <b>Câu 1:</b> Một mạng con lớp C cần chứa tối thiểu 15 host, sử dụng
            Subnet Mask nào sau đây:
          </div>
        </div>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script>
export default {
  name: "sampleTests",
  auth: "true",
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
