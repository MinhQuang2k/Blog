<template>
  <div>
    <div class="box-white d-flex justify-content-between">
      <h4>Cài đặt đợt thi</h4>
      <div>
        <a-button class="mr-3" @click="onBack">Quay lại</a-button>
        <a-button type="primary" @click.stop="onAdd">Tạo mới</a-button>
      </div>
    </div>
    <div class="d-flex box-white">
      <div class="df-1 pr-4 border-right">
        <div class="mb-4">
          <h4>Đề thi: {{ testName }}</h4>
        </div>
        <div class="mb-4">
          <h4>Tên đợt thi</h4>
          <div class="c-form-item">
            <span
              class="c-tooltip-error"
              :class="{ 'is-show': this.$v.name.$dirty && this.$v.name.$error }"
              >Trường thông tin không được để trống
            </span>
            <a-input class="wr-100" v-model="name" />
          </div>
        </div>
        <div class="mb-4">
          <h4>Mô tả đợt thi</h4>
          <div class="c-form-item"><a-textarea v-model="note" :rows="6" /></div>
        </div>
        <div class="mb-4">
          <h4>Mốc đạt(%)</h4>
          <a-input-number class="wr-100" v-model="passMark" />
        </div>
        <div class="mb-4">
          <h4>Truy cập đợt thi có hiệu lực</h4>
          <h5 class="mb-3">
            Nếu không chọn thời gian đợt thi có hiệu lực thì đợt thi sẽ có hiệu
            lực không giới hạn
          </h5>
          <a-range-picker
            :show-time="{
              hideDisabledOptions: true,
            }"
            v-model="period"
            :format="DATE_TIME"
          />
        </div>
      </div>
      <div class="df-1 pl-4">
        <div class="mb-4">
          <h4>Mã truy cập đợt thi</h4>
          <a-radio-group class="mb-4" v-model="typeCode">
            <a-radio :value="TYPE_CODE.ONE_CODE"> Một mã </a-radio>
            <a-radio :value="TYPE_CODE.LIST_CODE"> Danh sách mã </a-radio>
            <a-radio :value="TYPE_CODE.NO_CODE"> Không có </a-radio>
          </a-radio-group>
          <template v-if="typeCode === TYPE_CODE.ONE_CODE">
            <h5>
              Nhập mã duy nhất dùng chung cho tất cả các ứng viên truy cập vào
            </h5>
            <a-input placeholder="Nhập mã" />
          </template>
          <template v-else-if="typeCode === TYPE_CODE.LIST_CODE">
            <h5>
              Mỗi ứng viên sẽ dùng một mã trong danh sách bạn tạo để truy cập
              vào link thi tuyển
            </h5>
            <a-button type="primary" @click="openModal">Tạo mã</a-button>
            <h4 class="mt-4">Số lần làm bài/mã</h4>
            <a-input-number v-model="limitCode" class="wr-100" />
          </template>
          <h5 v-else>
            Ai cũng có quyền truy cập vào link và thực hiện thi tuyển
          </h5>
        </div>
        <div class="mb-4">
          <h4>Kết quả test</h4>
          <a-row>
            <a-col :span="8">Điểm:</a-col>
            <a-col :span="16">
              <a-checkbox-group v-model="scoreShown">
                <div>
                  <a-checkbox :value="SCORE_SHOWN.IS_SCORE_SHOWN"
                    >Điểm</a-checkbox
                  >
                </div>
                <div>
                  <a-checkbox :value="SCORE_SHOWN.IS_PERCENT_SHOWN"
                    >Phần trăm hoàn thành</a-checkbox
                  >
                </div>
              </a-checkbox-group>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="8">Kết quả:</a-col>
            <a-col :span="16">
              <a-checkbox-group v-model="resultShown">
                <div>
                  <a-checkbox :value="RESULT_SHOWN.IS_DETAIL_RESULT_SHOWN"
                    >Chi tiết</a-checkbox
                  >
                </div>
                <div>
                  <a-checkbox :value="RESULT_SHOWN.IS_PASSED_RESULT_SHOWN"
                    >Đạt/trượt</a-checkbox
                  >
                </div>
              </a-checkbox-group>
            </a-col>
          </a-row>
        </div>
        <div class="mb-4">
          <h4>Yêu cầu thông tin</h4>
          <a-checkbox-group v-model="requires">
            <a-row>
              <a-col :span="8">
                <a-checkbox :value="REQUIRE.IS_REQUIRE_PHONE">
                  Số điện thoại
                </a-checkbox>
              </a-col>
              <a-col :span="8">
                <a-checkbox :value="REQUIRE.IS_REQUIRE_FULLNAME">
                  Họ và tên</a-checkbox
                >
              </a-col>
              <a-col :span="8">
                <a-checkbox :value="REQUIRE.IS_REQUIRE_GROUP"> Nhóm</a-checkbox>
              </a-col>
              <a-col :span="8">
                <a-checkbox :value="REQUIRE.IS_REQUIRE_EMAIL">
                  Email
                </a-checkbox>
              </a-col>
              <a-col :span="8">
                <a-checkbox :value="REQUIRE.IS_REQUIRE_IDENTIFY_CODE">
                  Mã định danh
                </a-checkbox>
              </a-col>
              <a-col :span="8">
                <a-checkbox :value="REQUIRE.IS_REQUIRE_POSITION">
                  Vị trí công việc
                </a-checkbox>
              </a-col>
            </a-row>
          </a-checkbox-group>
        </div>
      </div>
    </div>
    <ModalAdd :isShow.sync="isShowModal" :limitCode="limitCode" />
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
import generate from "@/mixins/generate";
import { required } from "vuelidate/lib/validators";
import { DATE_TIME } from "@/constants/common";
import { mapActions } from "vuex";
import {
  SCORE_SHOWN,
  REQUIRE,
  RESULT_SHOWN,
  TYPE_CODE,
} from "@/constants/exam";
import ModalAdd from "../modal/modalAdd.vue";
export default {
  name: "stepTwo",
  mixins: [generate],
  components: {
    ModalAdd: ModalAdd,
  },
  data() {
    return {
      DATE_TIME,
      SCORE_SHOWN,
      REQUIRE,
      RESULT_SHOWN,
      TYPE_CODE,
      isShowModal: false,
      period: [],
      limitCode: null,
    };
  },
  validations() {
    return {
      name: {
        required,
      },
    };
  },
  computed: {
    ...mapFields("roomSetting", {
      step: "step",
      tabs: "setting.tabs",
      name: "setting.name",
      note: "setting.note",
      testId: "setting.testId",
      testName: "setting.testName",
      tabId: "setting.tabId",
      startAt: "setting.startAt",
      endAt: "setting.endAt",
      typeCode: "setting.typeCode",
      accessCodes: "setting.accessCodes",
      attemptLimit: "setting.attemptLimit",
      requires: "setting.requires",
      isActive: "setting.isActive",
      passMark: "setting.passMark",
      scoreShown: "setting.scoreShown",
      resultShown: "setting.resultShown",
    }),
  },
  watch: {
    period(value) {
      if (value && value.length) {
        this.startAt = this.$dayjs(value[0]).format(DATE_TIME);
        this.endAt = this.$dayjs(value[1]).format(DATE_TIME);
      }
    },
  },
  mounted() {
    if (this.startAt && this.endAt) {
      this.period = [this.$dayjs(this.startAt), this.$dayjs(this.endAt)];
    } else {
      this.period = [];
    }
    this.limitCode = this.accessCodes.length || null;
  },
  methods: {
    ...mapActions("roomSetting", ["create"]),
    async onAdd() {
      this.$v.$touch();
      if (this.$v.name.$invalid) return;
      const response = await this.create();

      if (response?.data?.code === "SUCCESS") {
        this.$notification["success"]({
          message: "Thêm thành công",
        });
        this.$router.push({
          path: "/rooms/",
        });
      } else {
        this.$notification["error"]({
          message: "Lôĩ khi tạo",
        });
      }
    },
    onBack() {
      this.step = 0;
    },
    openModal() {
      this.isShowModal = true;
    },
  },
};
</script>
