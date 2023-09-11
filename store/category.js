import { getField, updateField } from "vuex-map-fields";

export const state = () => ({
  list: [],
  pagination: {
    currentpage: 1,
    total: 1,
    limit: 20,
  },
});

export const actions = {
  getPaging({}, params) {
    return this.$axios.get("/api/categories", { params });
  },
  getAll({}) {
    return this.$axios.get("/api/categories/all");
  },
  create({}, params) {
    return this.$axios.post("/api/categories", params);
  },
  update({}, params) {
    const { id, payload } = params;
    return this.$axios.put(`/api/categories/${id}`, payload);
  },
  delete({}, params) {
    const id = params.id;
    return this.$axios.delete(`/api/categories/${id}`);
  },
  createSub({}, params) {
    return this.$axios.post("/api/subjects", params);
  },
  updateSub({}, params) {
    const { id, payload } = params;
    return this.$axios.put(`/api/subjects/${id}`, payload);
  },
  deleteSub({}, params) {
    const id = params.id;
    const categoryId = params.categoryId;
    return this.$axios.delete(`/api/subjects/${id}/${categoryId}`);
  },
  moveSub({}, params) {
    const { id, payload } = params;
    return this.$axios.put(`/api/subjects/move/${id}`, payload);
  },
  setPagination({ commit }) {
    commit("SET_PAGINATION");
  },
};
export const mutations = {
  updateField,
  SET_PAGINATION(state, payload) {
    state.pagination.current_page = payload.current_page;
    state.pagination.total = payload.total;
    state.pagination.limit = payload.limit;
  },
};

export const getters = {
  getField,
};
