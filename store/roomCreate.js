import { getField, updateField } from "vuex-map-fields";

export const state = () => ({
  test: {
    list: [],
    pagination: {
      currentPage: 1,
      total: 1,
      limit: 20,
    },
    testId: null,
    keyword: "",
    subId: null,
  },
  setting: {
    score: 0,
    groupQuestionId: null,
    timeLimit: "",
    name,
    pass_mark,
    is_require_code,
    is_require_email,
    is_require_full_name,
    is_require_phone,
    is_require_group,
    is_require_identify_code,
    code_room,
    link_room_exam,
    status,
    exam_id,
  },
});

export const actions = {
  getPaging({}, params) {
    return this.$axios.get(`/api/group-questions`, { params });
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
