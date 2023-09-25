// sort_by: recent;
// sort_by: alphabet;
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
    return this.$axios.get(`/api/questions`, { params });
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
