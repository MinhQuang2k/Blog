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
            default-value="lucy"
            @change="onSelectSubject"
          >
            <a-select-opt-group>
              <span slot="label"><a-icon type="user" />Manager</span>
              <a-select-option value="jack"> Jack </a-select-option>
              <a-select-option value="lucy"> Lucy </a-select-option>
            </a-select-opt-group>
            <a-select-opt-group label="Engineer">
              <a-select-option value="Yiminghe"> yiminghe </a-select-option>
            </a-select-opt-group>
          </a-select>
        </a-col>
        <a-col :span="5" class="pl-4">
          <a-select class="select" default-value="new" @change="onSelectSort">
            <a-select-option value="new"> Tạo gần đây </a-select-option>
            <a-select-option value="order"> A-Z </a-select-option>
          </a-select>
        </a-col>
        <a-col :span="4" :offset="2" class="d-flex justify-content-end"
          ><a-button type="primary" @click="onOpenModal"
            >Tạo đề thi</a-button
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
              <h4>Đề Test Kỹ Sư Mạng Máy Tính</h4>
              <div class="d-flex align-items-center">
                <div class="d-flex align-items-center mr-4">
                  <a-icon type="calendar" class="mr-2" />
                  <div>26/07/2023</div>
                </div>
                <div class="d-flex align-items-center mr-4">
                  <a-icon type="link" class="mr-2" />
                  <div>0 Đợt thi</div>
                </div>
                <div class="d-flex align-items-center mr-4">
                  <a-icon type="question-circle" class="mr-2" />
                  <div>24 Câu hỏi</div>
                </div>
                <div class="d-flex align-items-center mr-4">
                  <a-icon type="crown" class="mr-2" />
                  <div>24 Điểm</div>
                </div>
                <div class="d-flex align-items-center mr-4">
                  <a-icon type="folder" class="mr-2" />
                  <div>DEF</div>
                </div>
              </div>
            </a-col>
            <a-col
              ><a-button type="link"> <a-icon type="edit" /></a-button>
              <a-button type="link"><a-icon type="form" /></a-button>
              <a-button type="link"> <a-icon type="delete" /></a-button
            ></a-col>
          </a-row>
        </template>
        <div class="box-white">
          <a-row type="flex" justify="space-between">
            <a-col :span="6"
              ><h4>max</h4>
              <p class="ma-0">
                https://e.testcenter.vn/t/cU5_UH8OJFAOM1RcRyYED0F4SHIX
              </p>
            </a-col>
            <a-col>
              <a-button
                type="link"
                @click="
                  copyText(
                    'https://e.testcenter.vn/t/cU5_UH8OJFAOM1RcRyYED0F4SHIX'
                  )
                "
              >
                Sao chép liên kết</a-button
              >
              <a-button type="link" @click="onSettingRoom(1)">
                Cài đặt</a-button
              >
              <a-button type="primary" @click="onShowResult">
                Xem kết quả</a-button
              >
            </a-col>
          </a-row>
        </div>
        <div class="box-white">
          <h4>Chưa có đợt thi tuyển nào được tạo ra từ đề thi này</h4>
          <a-button type="primary" @click="onAddRoom">Tạo đợt thi</a-button>
        </div>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      current: 2,
      visible: false,
    };
  },
  methods: {
    onSelectSubject(value) {
      console.log(`selected ${value}`);
    },
    onSelectSort(value) {
      console.log(`selected ${value}`);
    },
    onOpenModal() {
      this.visible = true;
    },
    onCloseModal() {
      this.visible = false;
    },
    onShowResult() {},
    onSettingRoom(roomID) {
      this.$router.push(`rooms/${roomID}/edit`);
    },
  },
};
</script>
