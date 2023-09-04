import { getField, updateField } from "vuex-map-fields";

export const state = () => ({
  tagId: null,
  score: 0,
  content: "",
  answersMuliti: [
    { id: "a", content: "1" },
    { id: "b", content: "2" },
    { id: "c", content: "123" },
    { id: "d", content: "323" },
    { id: "e", content: "12" },
  ],
  answersBoolean: [
    { id: "a", content: "1" },
    { id: "b", content: "2" },
  ],
  correctAnswersMuliti: ["a", "b"],
  correctAnswerBoolean: "a",
  hasMulCorrectAnswers: true,
  noteAnswer: "",
  matchingAnswers: {
    questions: [
      { id: 1, content: "<p>1</p>" },
      { id: 2, content: "<p>2</p>" },
      { id: 3, content: "<p>f</p>" },
    ],
    answers: [
      { id: "a", content: "<p>1</p>" },
      { id: "b", content: "<p>2</p>" },
    ],
  },
  matchingCorrectAnswers: { 1: ["a"], 2: ["b"], 3: ["a"] },
  fillBlankCorrectAnswers: [
    { key: 1, content: ["son"] },
    { key: 2, content: ["Nghia me"] },
  ],
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
