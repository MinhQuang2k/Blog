import { getField, updateField } from "vuex-map-fields";

export const state = () => ({
  categories: [],
  step: 0,
  test: {
    list: [],
    pagination: {
      currentPage: 1,
      total: 1,
      limit: 20,
    },
    keyword: "",
    subId: "",
  },
  setting: {
    name: "",
    note: "",
    testId: null,
    testName: "",
    startAt: null,
    endAt: null,
    typeCode: 0,
    attemptLimit: 0,
    accessCodes: [],
    requires: [],
    isActive: true,
    passMark: null,
    scoreShown: [],
    resultShown: [],
  },
});

const getConvertParam = (state) => {
  return {
    name: state.setting.name,
    note: state.setting.note,
    exam_id: state.setting.testId,
    start_at: state.setting.startAt,
    end_at: state.setting.endAt,
    type_code: state.setting.typeCode,
    attempt_limit: state.setting.attemptLimit,
    access_codes: state.setting.accessCodes,
    requires: state.setting.requires,
    is_active: state.setting.isActive,
    pass_mark: state.setting.passMark,
    score_shown: state.setting.scoreShown,
    result_shown: state.setting.resultShown,
  };
};

const getFormatParam = (data) => {
  return {
    name: data.name,
    note: data.note,
    testId: data.exam_id,
    startAt: data.start_at,
    endAt: data.end_at,
    typeCode: data.type_code,
    attemptLimit: data.attempt_limit,
    accessCodes: data.access_codes,
    requires: data.requires,
    isActive: data.is_active,
    passMark: data.pass_mark,
    scoreShown: data.score_shown,
    resultShown: data.result_shown,
  };
};

export const actions = {
  getPaging({}, params) {
    return this.$axios.get(`/api/rooms`, { params });
  },
  create({ state }) {
    return this.$axios.post("/api/rooms", getConvertParam(state));
  },
  update({}, params) {
    const { id, payload } = params;
    return this.$axios.put(`/api/rooms/${id}`, payload);
  },
  delete({}, params) {
    const id = params.id;
    return this.$axios.delete(`/api/rooms/${id}`);
  },
  getCodeRoom({}, params) {
    return this.$axios.get(`/api/rooms/code`, { params });
  },
  async getCategory({ commit }) {
    const response = await this.$axios.get("/api/categories/all");
    if (response?.data?.code === "SUCCESS") {
      commit("SET_CATEGORY", response?.data?.data);
    }
  },
  async getTest({ commit }, params = {}) {
    const response = await this.$axios.get("/api/exams", { params });
    if (response?.data?.code === "SUCCESS") {
      commit("SET_TEST", response?.data?.data);
    }
  },
};
export const mutations = {
  updateField,
  SET_CATEGORY(state, payload) {
    state.categories = payload;
  },
  SET_TEST(state, payload) {
    state.test.list = payload.rows;
    state.test.pagination.currentPage = payload.pagination.current_page;
    state.test.pagination.total = payload.pagination.total;
    state.test.pagination.limit = payload.pagination.limit;
  },
};

export const getters = {
  getField,
};
