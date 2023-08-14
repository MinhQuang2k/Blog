<template>
  <div>
    <div class="box-white d-flex justify-content-between">
      <h4>fercvdf</h4>
      <div>
        <a-button type="primary" class="mr-3">Cài đặt</a-button>
        <a-button class="mr-3">Xem kết quả</a-button>
        <a-switch default-checked @change="onChange" />
      </div>
    </div>
    <div class="d-flex g-4 my-4">
      <div class="df-4">
        <div class="box-white">
          <div class="d-flex justify-content-between mb-4">
            <h4>Thông tin đợt thi tuyển</h4>
            <div>Đang hoạt động</div>
          </div>
          <div class="mb-4">
            <h4>LINK ĐỢT THI</h4>
            <a>https://e.testcenter.vn/t/cEJ9U38OJFAOM1RcRyYED0</a>
          </div>
          <div>
            <h4>ĐỀ THI</h4>
            <a>Đề Test Kỹ Sư Mạng Máy Tính</a>
          </div>
        </div>
      </div>
      <div class="df-8 box-white">
        <h4>Cài đặt & quyền truy cập</h4>
        <a-row>
          <a-col :span="12"
            ><h4>TRUY CẬP ĐỢT THI CÓ HIỆU LỰC</h4>
            <p>Truy cập không giới hạn</p></a-col
          >
          <a-col :span="12"
            ><h4>KẾT QUẢ TEST</h4>
            <p>Điểm, Phần trăm hoàn thành, Chi tiết</p></a-col
          >
          <a-col :span="12"
            ><h4>YÊU CẦU THÔNG TIN</h4>
            <p>Họ và tên</p></a-col
          >
          <a-col :span="12"
            ><h4>MÃ TRUY CẬP ĐỢT THI</h4>
            <p>Không có mã truy cập</p></a-col
          >
        </a-row>
      </div>
    </div>
    <a-button>Hủy</a-button>
  </div>
</template>

<script>
export default {
  name: "roomEdit",
  auth: "true",
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
