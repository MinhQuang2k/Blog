import { getField, updateField } from "vuex-map-fields";

export const state = () => ({
  list: [],
  pagination: {
    currentPage: 1,
    total: 1,
    limit: 20,
  },
});

export const actions = {
  getPaging({}, params) {
    return this.$axios.get("/api/group-questions", { params });
  },
  getAll() {
    return this.$axios.get("/api/group-questions/all");
  },
  create({}, params) {
    return this.$axios.post("/api/group-questions", params);
  },
  update({}, params) {
    const { id, payload } = params;
    return this.$axios.put(`/api/group-questions/${id}`, payload);
  },
  delete({}, params) {
    const id = params.id;
    return this.$axios.delete(`/api/group-questions/${id}`);
  },
  setPagination({ commit }, params) {
    commit("SET_PAGINATION", params);
  },
};
export const mutations = {
  updateField,
  SET_PAGINATION(state, payload) {
    state.pagination.currentPage = payload.current_page;
    state.pagination.total = payload.total;
    state.pagination.limit = payload.limit;
  },
};

export const getters = {
  getField,
};
