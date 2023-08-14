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
            <a-select-option value="new"> Tạo gần đây </a-select-option>
            <a-select-option value="order"> A-Z </a-select-option>
          </a-select>
        </a-col>
        <a-col :span="4" :offset="7" class="d-flex justify-content-end"
          ><a-button type="primary">Tạo câu hỏi</a-button></a-col
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
              <h4 class="mt-4">Các đề thi đang sử dụng câu hỏi này</h4>
              <div>1) <a class="ml-2">nqm3</a></div>
              <div>1) <a class="ml-2">nqm3</a></div>
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
              <p>
                Công cha như núi thái __1__ <br />__2__ như nước trong nguồn
                chảy ra
              </p>
              <h4>Đáp án</h4>
              <div class="d-flex align-items-center">
                <div>1<span class="ml-4 badge bg-green">Nghia</span></div>
              </div>
              <div class="d-flex align-items-center">
                <div>1<span class="ml-4 badge bg-green">Nghia</span></div>
              </div>
              <h4 class="mt-4">Các đề thi đang sử dụng câu hỏi này</h4>
              <div>1) <a class="ml-2">nqm3</a></div>
              <div>1) <a class="ml-2">nqm3</a></div>
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
              <h4>Các đề thi đang sử dụng câu hỏi này</h4>
              <div>1) <a class="ml-2">nqm3</a></div>
              <div>1) <a class="ml-2">nqm3</a></div>
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
  name: "bank",
  auth: "true",
  data() {
    return {
      current: 2,
    };
  },
  methods: {
    selectSubject(value) {
      console.log(`selected ${value}`);
    },
    selectGroupQuestion(value) {
      console.log(`selected ${value}`);
    },
  },
};
</script>
