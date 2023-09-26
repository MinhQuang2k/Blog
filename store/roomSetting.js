import { getField, updateField } from "vuex-map-fields";

export const state = () => ({
  categories: [],
  step: 1,
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
    startAt: null,
    endAt: null,
    typeCode: 0,
    accessCodes: [],
    requires: [],
    isActive: true,
    passMark: null,
    scoreShown: [],
    resultShown: [],
  },
});

export const actions = {
  getPaging({}, params) {
    return this.$axios.get(`/api/rooms`, { params });
  },
  create({}, params) {
    return this.$axios.post("/api/rooms", params);
  },
  update({}, params) {
    const { id, payload } = params;
    return this.$axios.put(`/api/rooms/${id}`, payload);
  },
  delete({}, params) {
    const id = params.id;
    return this.$axios.delete(`/api/rooms/${id}`);
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
