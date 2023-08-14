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
              <h4>Đáp án</h4>
              <div class="d-flex align-items-center c-green">
                <div class="w-20">
                  <a-icon type="check-circle" class="align-middle" />
                </div>
                <div>A)<span class="ml-3">1</span></div>
              </div>
              <div class="d-flex c-red">
                <div class="w-20">
                  <a-icon type="close-circle" class="align-middle" />
                </div>
                <div>B)<span class="ml-3">1</span></div>
              </div>
              <div class="d-flex">
                <div class="w-20"></div>
                <div>C)<span class="ml-3">1</span></div>
              </div>
              <div class="d-flex">
                <div class="w-20"></div>
                <div>D)<span class="ml-3">1</span></div>
              </div>
            </a-col>
            <a-col :span="12">
              <h4>Thông tin câu hỏi</h4>
              <a-row class="mt-3">
                <a-col :span="5">Nhóm câu hỏi</a-col>
                <a-col>array</a-col>
              </a-row>
              <a-row class="mt-2">
                <a-col :span="5">Kiểu câu hỏi</a-col>
                <a-col>array</a-col>
              </a-row>
              <a-row class="mt-2">
                <a-col :span="5">Điểm</a-col>
                <a-col>10</a-col>
              </a-row>
              <a-row class="mt-2">
                <a-col :span="5">Ngày tạo</a-col>
                <a-col>30/11/2022 01:13:18</a-col>
              </a-row>
              <a-row class="mt-2">
                <a-col :span="5">Thời gian làm bài</a-col>
                <a-col>Không giới hạn</a-col>
              </a-row>
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
              <h4>Đáp án</h4>
              <div class="d-flex align-items-center c-green">
                <div class="w-20">
                  <a-icon type="check-circle" class="align-middle" />
                </div>
                <div>A)<span class="ml-3">1</span></div>
              </div>
              <div class="d-flex c-red">
                <div class="w-20">
                  <a-icon type="close-circle" class="align-middle" />
                </div>
                <div>B)<span class="ml-3">1</span></div>
              </div>
              <div class="d-flex">
                <div class="w-20"></div>
                <div>C)<span class="ml-3">1</span></div>
              </div>
              <div class="d-flex">
                <div class="w-20"></div>
                <div>D)<span class="ml-3">1</span></div>
              </div>
            </a-col>
            <a-col :span="12">
              <h4>Thông tin câu hỏi</h4>
              <a-row class="mt-3">
                <a-col :span="5">Nhóm câu hỏi</a-col>
                <a-col>array</a-col>
              </a-row>
              <a-row class="mt-2">
                <a-col :span="5">Kiểu câu hỏi</a-col>
                <a-col>array</a-col>
              </a-row>
              <a-row class="mt-2">
                <a-col :span="5">Điểm</a-col>
                <a-col>10</a-col>
              </a-row>
              <a-row class="mt-2">
                <a-col :span="5">Ngày tạo</a-col>
                <a-col>30/11/2022 01:13:18</a-col>
              </a-row>
              <a-row class="mt-2">
                <a-col :span="5">Thời gian làm bài</a-col>
                <a-col>Không giới hạn</a-col>
              </a-row>
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
