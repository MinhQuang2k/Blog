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
  getPaging({ commit, state }, payload) {
    return this.$axios.get(`/api/group-questions`, { payload });
  },
  create({ }, payload) {
    return this.$axios.post("/api/group-questions", payload);
  },
  update({ }, payload) {
    const id = payload?.id
    const data = payload?.params
    return this.$axios.post(`/api/group-questions/${id}`, data);
  },
  delete({ }, payload) {
    const id = payload?.id
    return this.$axios.post(`/api/group-questions/${id}`);
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
