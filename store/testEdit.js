import { getField, updateField } from "vuex-map-fields";

export const state = () => ({
  id: null,
  name: "",
  timeLimit: 0,
  description: "",
  shuffleQuestion: false,
  type: 1,
  totalQuestions: 0,
  totalScore: 0,
  subjectId: null,
  questions: [],
  rooms: [],
});

export const actions = {
  async getByID({ commit }, params) {
    const { id } = params;
    const response = await this.$axios.get(`/api/exams/${id}`);
    if (response?.data?.code === "SUCCESS") {
      commit("SET_TEST", response?.data?.data);
    }
    return response;
  },
  update({}, params) {
    const { id, payload } = params;
    return this.$axios.put(`/api/exams/${id}`, payload);
  },
  delete({}, params) {
    const id = params.id;
    return this.$axios.delete(`/api/exams/${id}`);
  },
  getCategory({}) {
    return this.$axios.get("/api/categories/all");
  },
};
export const mutations = {
  updateField,
  SET_TEST(state, payload) {
    state.id = payload?.id;
    state.name = payload?.name;
    state.timeLimit = payload?.time_limit;
    state.description = payload?.description;
    state.shuffleQuestion = payload?.shuffle_question;
    state.type = payload?.type;
    state.totalQuestions = payload?.total_questions;
    state.totalScore = payload?.total_score;
    state.subjectId = payload?.subject_id;
    state.questions = payload?.questions;
    state.rooms = payload?.rooms;
  },
};

export const getters = {
  getField,
};
