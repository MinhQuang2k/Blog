<template>
  <div>
    <div class="box-white-full">
      <div class="px-4 border-bottom d-flex justify-content-between">
        <div>
          <h4>Tên đề thi</h4>
          <p>Mô tả đề thi</p>
        </div>
        <div>
          <a-button type="link"><a-icon type="edit" /></a-button>
          <a-dropdown v-model="isMore">
            <a-button type="link" @click="onShowMore"
              ><a-icon type="ellipsis"
            /></a-button>
            <a-menu slot="overlay" @click="handleMenuClick">
              <a-menu-item key="1"> In </a-menu-item>
              <a-menu-item key="2"> Xuất tệp </a-menu-item>
              <a-menu-item key="3" class="c-red"> Xóa </a-menu-item>
            </a-menu>
          </a-dropdown>
        </div>
      </div>
      <div class="px-4 pt-4 d-flex justify-content-between">
        <div class="d-flex align-items-center">
          <div class="d-flex align-items-center mr-4">
            <a-icon type="question-circle" class="mr-2" />
            <div>24 Câu hỏi</div>
          </div>
          <div class="d-flex align-items-center mr-4">
            <a-icon type="crown" class="mr-2" />
            <div>24 Điểm</div>
          </div>
          <div class="d-flex align-items-center mr-4">
            <a-icon type="clock-circle" class="mr-2" />
            <div>12 phút</div>
          </div>
          <div class="d-flex align-items-center mr-4">
            <a-icon type="file" class="mr-2" />
            <div>1 câu hỏi / trang</div>
          </div>
          <div class="d-flex align-items-center mr-4">
            <a-icon type="retweet" class="mr-2" />
            <div>Giữ thứ tự các câu hỏi</div>
          </div>
        </div>
        <div>
          <a-dropdown-button type="primary" @click="handleButtonClick">
            Thêm câu hỏi
            <a-menu slot="overlay" @click="handleMenuClick">
              <a-menu-item key="1"> Tạo bằng tay </a-menu-item>
              <a-menu-item key="2"> Tạo từ ngân hàng của tôi </a-menu-item>
              <a-menu-item key="3"> Tạo từ ngân hàng câu hỏi</a-menu-item>
              <a-menu-item key="4"> Tạo từ file excel</a-menu-item>
            </a-menu>
            <a-icon slot="icon" type="caret-down" />
          </a-dropdown-button>
        </div>
      </div>
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
            <a-col :span="10" :offset="2"><AnswerInfoBoolean /> </a-col>
            <a-col :span="12"><ListTest /></a-col>
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
            <a-col :span="10" :offset="2"><AnswerInfoBoolean /> </a-col>
            <a-col :span="12"><ListTest /></a-col>
          </a-row>
        </div>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script>
export default {
  name: "testEdit",

  data() {
    return {
      value: 1,
      current: 2,
      isMore: false,
    };
  },
  methods: {
    onChange(e) {
      console.log("radio checked", e.target.value);
    },
    onChangeV(checked) {
      console.log(`a-switch to ${checked}`);
    },
    handleButtonClick(e) {
      console.log("click left button", e);
    },
    handleMenuClick(e) {
      console.log("click", e);
    },
    onShowMore() {
      this.isMore = !this.isMore;
    },
  },
};
</script>
