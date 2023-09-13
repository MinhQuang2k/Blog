// sort_by: recent;
// sort_by: alphabet;
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
    return this.$axios.get(`/api/questions`, { params });
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
