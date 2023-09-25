<template>
  <div>
    <div class="box-white d-flex justify-content-between">
      <h4>Cài đặt đợt thi</h4>
      <div>
        <a-button class="mr-3">Quay lại</a-button>
        <a-button type="primary">Tạo mới</a-button>
      </div>
    </div>
    <div class="d-flex box-white">
      <div class="df-1 pr-4 border-right">
        <div class="mb-4">
          <h4>Điểm</h4>
          <a-input />
        </div>
        <div class="mb-4">
          <h4>Nhóm câu hỏi</h4>
          <a-select
            show-search
            placeholder="Select a person"
            option-filter-prop="children"
            class="wr-100"
            :filter-option="filterOption"
            @change="handleChange"
          >
            <a-select-option value="jack"> Jack </a-select-option>
            <a-select-option value="lucy"> Lucy </a-select-option>
            <a-select-option value="tom"> Tom </a-select-option>
          </a-select>
        </div>
        <div class="mb-4">
          <h4>Thời gian làm bài</h4>
          <a-time-picker class="wr-100" @change="onChange" />
        </div>
        <div class="mb-4">
          <h4>Mốc đạt(%)</h4>
          <a-input-number class="wr-100" />
        </div>
        <div class="mb-4">
          <h4>Truy cập đợt thi có hiệu lực</h4>
          <h5 class="mb-3">
            Nếu không chọn thời gian đợt thi có hiệu lực thì đợt thi sẽ có hiệu
            lực không giới hạn
          </h5>
          <a-range-picker
            :disabled-date="disabledDate"
            :disabled-time="disabledRangeTime"
            :show-time="{
              hideDisabledOptions: true,
            }"
            format="YYYY-MM-DD HH:mm:ss"
          />
        </div>

        <div class="mb-4">
          <h4>Yêu cầu thông tin</h4>
          <a-checkbox-group @change="onChange">
            <a-row>
              <a-col :span="8">
                <a-checkbox value="A"> Số điện thoại </a-checkbox>
              </a-col>
              <a-col :span="8">
                <a-checkbox value="B"> Họ và tên</a-checkbox>
              </a-col>
              <a-col :span="8">
                <a-checkbox value="C"> Nhóm</a-checkbox>
              </a-col>
              <a-col :span="8">
                <a-checkbox value="D"> Email </a-checkbox>
              </a-col>
              <a-col :span="8">
                <a-checkbox value="E"> Mã định danh </a-checkbox>
              </a-col>
              <a-col :span="8">
                <a-checkbox value="H"> Vị trí công việc </a-checkbox>
              </a-col>
            </a-row>
          </a-checkbox-group>
        </div>
      </div>
      <div class="df-1 pl-4">
        <div class="mb-4">
          <h4>Mã truy cập đợt thi</h4>
          <!-- <div class="pa-4">
              <a-radio-group class="mb-4" v-model="value" @change="onChange">
                <a-radio :value="1"> Một mã </a-radio>
                <a-radio :value="2"> Danh sách mã </a-radio>
                <a-radio :value="3"> Không có </a-radio>
              </a-radio-group>
              <h5>Nhập mã duy nhất dùng chung cho tất cả các ứng viên truy cập vào</h5>
              <a-input placeholder="Nhập mã" />
            </div> -->
          <!-- <div class="pa-4">
              <h5>Ai cũng có quyền truy cập vào link và thực hiện thi tuyển</h5>
            </div> -->
          <div>
            <h5>
              Mỗi ứng viên sẽ dùng một mã trong danh sách bạn tạo để truy cập
              vào link thi tuyển
            </h5>
            <a-button type="primary" @click="openModal">Tạo mã</a-button>
            <h4 class="mt-4">Số lần làm bài/mã</h4>
            <a-input-number class="wr-100" />
          </div>
        </div>
        <div class="mb-4">
          <h4>Kết quả test</h4>
          <a-row>
            <a-col :span="8">Điểm:</a-col>
            <a-col :span="16">
              <div><a-checkbox>Điểm</a-checkbox></div>
              <div><a-checkbox>Phần trăm hoàn thành</a-checkbox></div>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="8">Kết quả:</a-col>
            <a-col :span="16">
              <div><a-checkbox>Chi tiết</a-checkbox></div>
              <div><a-checkbox>Đạt/trượt</a-checkbox></div>
            </a-col>
          </a-row>
        </div>
      </div>
    </div>
    <a-modal
      title="Tạo danh sách mã"
      :visible="visible"
      @ok="closeModal"
      @cancel="closeModal"
      cancelText="Hủy"
      okText="Lưu"
    >
      <div class="d-flex justify-content-between mb-4">
        <h4>Nhập tên nhóm</h4>
        <a-button type="primary">Tạo mã tự động</a-button>
      </div>
      <a-textarea :rows="6" />
    </a-modal>
  </div>
</template>

<script>
export default {
  name: "roomsCreate1",

  data() {
    return {
      current: 2,
      visible: false,
    };
  },
  methods: {
    onChange(checked) {
      console.log(`a-switch to ${checked}`);
    },
    handleChange(value) {
      console.log(`selected ${value}`);
    },
    openModal() {
      this.visible = true;
    },
    closeModal() {
      this.visible = false;
    },
    disabledDate(current) {
      // Can not select days before today and today
      return current && current < moment().endOf("day");
    },
    disabledRangeTime(_, type) {
      if (type === "start") {
        return {
          disabledHours: () => this.range(0, 60).splice(4, 20),
          disabledMinutes: () => this.range(30, 60),
          disabledSeconds: () => [55, 56],
        };
      }
      return {
        disabledHours: () => this.range(0, 60).splice(20, 4),
        disabledMinutes: () => this.range(0, 31),
        disabledSeconds: () => [55, 56],
      };
    },
  },
};
</script>
