<template>
  <div>
    <div class="box-white">
      <h4>Chọn đề thi</h4>
      <a-row type="flex">
        <a-col :span="8" class="box-search">
          <a-input
            v-model="keyword"
            class="input-search"
            placeholder="Search"
          />
          <a-icon type="search" class="icon-search" @click="getListTest" />
        </a-col>
        <a-col :span="5" class="pl-4">
          <a-select class="select" v-model="subId">
            <a-select-option value="">Tất cả các danh mục</a-select-option>
            <a-select-opt-group
              v-for="item in categories"
              :key="item.id"
              :label="item.name"
            >
              <a-select-option
                v-for="sub in item.subjects"
                :key="sub.id"
                :value="sub.id"
              >
                {{ sub.name }}
              </a-select-option>
            </a-select-opt-group>
          </a-select>
        </a-col>
        <a-col :span="4" :offset="7" class="d-flex justify-content-end">
          <a-button class="mr-3" type="primary" @click="onNext"
            >Tiếp tục</a-button
          >
          <a-button @click="onBack">Hủy</a-button>
        </a-col>
      </a-row>
    </div>
    <a-row v-for="item in list" :key="item.id" class="box-white" type="flex">
      <a-col
        ><a-radio @change="onChooseTest(item.id)" :checked="testId === item.id"
      /></a-col>
      <a-col>
        <h4>{{ item.name }}</h4>
        <div class="d-flex align-items-center">
          <div class="d-flex align-items-center mr-4">
            <a-icon type="calendar" class="mr-2" />
            <div>{{ $dayjs(item.created_at).format(DATE) }}</div>
          </div>
          <div class="d-flex align-items-center mr-4">
            <a-icon type="folder" class="mr-2" />
            <div>{{ item.subject.name }}</div>
          </div>
        </div>
      </a-col>
    </a-row>
    <div class="mt-4 d-flex justify-content-end">
      <a-pagination
        v-model="currentPage"
        :total="total"
        :page-size="limit"
        show-less-items
        @change="onChangePaging"
      />
    </div>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
import { mapActions } from "vuex";
import { DATE } from "@/constants/common";
export default {
  name: "stepOne",
  data() {
    return {
      DATE,
    };
  },
  computed: {
    ...mapFields("roomSetting", {
      step: "step",
      list: "test.list",
      categories: "categories",
      testId: "setting.testId",
      testName: "setting.testName",
      keyword: "test.keyword",
      subId: "test.subId",
      currentPage: "test.pagination.currentPage",
      total: "test.pagination.total",
      limit: "test.pagination.limit",
    }),
  },
  watch: {
    subId() {
      this.getListTest();
    },
  },
  mounted() {
    this.getCategory();
    this.getTest();
  },
  methods: {
    ...mapActions("roomSetting", ["getTest", "getCategory"]),
    onChangePaging(current) {
      const params = {
        page: current,
      };
      this.getListTest(params);
    },
    getListTest(payload = {}) {
      const params = {
        name: this.keyword.trim(),
        page: 1,
        limit: this.limit,
        subject_id: this.subId,
        ...payload,
      };
      this.getTest(params);
    },
    onChooseTest(value) {
      this.testId = value;
      this.testName = this.list.find((item) => item.id === value)?.name;
    },
    onNext() {
      if (this.testId) {
        this.step = 2;
      } else {
        this.$notification["error"]({
          message: "Vui lòng chọn đề thi",
        });
      }
    },
    onBack() {
      this.$router.push({ path: "/rooms/" });
    },
  },
};
</script>
