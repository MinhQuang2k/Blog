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
  name: "testEdit",
  auth: "true",
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
