import { getField, updateField } from "vuex-map-fields";
import { QUESTION_TYPE } from "~/constants/question.js";

const INIT_STATE = {
  questionType: QUESTION_TYPE.MULITI,
  tagId: null,
  score: 0,
  content: "",
  answersMuliti: [
    { id: "a", content: "" },
    { id: "b", content: "" },
    { id: "c", content: "" },
    { id: "d", content: "" },
  ],
  answersBoolean: [
    { id: "a", content: "" },
    { id: "b", content: "" },
  ],
  correctAnswersMuliti: [],
  correctAnswerBoolean: null,
  noteAnswer: "",
  matchingAnswers: {
    questions: [
      { id: 1, content: "" },
      { id: 2, content: "" },
    ],
    answers: [
      { id: "a", content: "" },
      { id: "b", content: "" },
    ],
  },
  matchingCorrectAnswers: { 1: [], 2: [] },
  fillBlankCorrectAnswers: [],
};

function getConvertParam(state) {
  switch (state.questionType) {
    case QUESTION_TYPE.MULITI:
      return {
        type: state.questionType,
        group_question_id: state.tagId,
        score: state.score,
        content: state.content,
        answer: state.answersMuliti,
        correct_answer: state.correctAnswersMuliti,
        note_answer: state.noteAnswer,
      };
    case QUESTION_TYPE.BOOLEAN:
      return {
        type: state.questionType,
        group_question_id: state.tagId,
        score: state.score,
        content: state.content,
        answer: state.answersBoolean,
        correct_answer: state.correctAnswerBoolean,
        note_answer: state.noteAnswer,
      };
    case QUESTION_TYPE.MATCH:
      return {
        type: state.questionType,
        group_question_id: state.tagId,
        score: state.score,
        content: state.content,
        matching_answer: state.matchingAnswers,
        matching_correct: state.matchingCorrectAnswers,
        note_answer: state.noteAnswer,
      };
    case QUESTION_TYPE.FILLBLANK:
      return {
        type: state.questionType,
        group_question_id: state.tagId,
        score: state.score,
        content: state.content,
        fill_blank_correct_answer: state.fillBlankCorrectAnswers,
        note_answer: state.noteAnswer,
      };
  }
}

function getFormatParam(data) {
  switch (data.type) {
    case QUESTION_TYPE.MULITI:
      return {
        questionType: data.type,
        tagId: data.group_question_id,
        score: data.score,
        content: data.content,
        answersMuliti: data.answer,
        correctAnswersMuliti: data.correct_answer,
        noteAnswer: data.note_answer,
      };
    case QUESTION_TYPE.BOOLEAN:
      return {
        questionType: data.type,
        tagId: data.group_question_id,
        score: data.score,
        content: data.content,
        answersBoolean: data.answer,
        correctAnswerBoolean: data.correct_answer,
        noteAnswer: data.note_answer,
      };
    case QUESTION_TYPE.MATCH:
      return {
        questionType: data.type,
        tagId: data.group_question_id,
        score: data.score,
        content: data.content,
        matchingAnswers: data.matching_answer,
        matchingCorrectAnswers: data.matching_correct,
        noteAnswer: data.note_answer,
      };
    case QUESTION_TYPE.FILLBLANK:
      return {
        questionType: data.type,
        tagId: data.group_question_id,
        score: data.score,
        content: data.content,
        fillBlankCorrectAnswers: data.fill_blank_correct_answer,
        noteAnswer: data.note_answer,
      };
  }
}

export const state = () => JSON.parse(JSON.stringify(INIT_STATE));

export const actions = {
  async getByID({ commit }, params) {
    const id = params.id;

    const response = await this.$axios.get(`/api/questions/${id}`);
    if (response?.data?.code === "SUCCESS") {
      commit("SET_QUESTION", response?.data?.data || {});
    }
  },
  create({ state }) {
    return this.$axios.post("/api/questions", getConvertParam(state));
  },
  update({ state }, params) {
    const { id } = params;
    return this.$axios.put(`/api/questions/${id}`, getConvertParam(state));
  },
  addQuestionToExam({}, params) {
    const { testId, questionId } = params;
    return this.$axios.post(`/api/exams/add/${testId}/${questionId}`);
  },
  delete({}, params) {
    const id = params.id;
    return this.$axios.delete(`/api/questions/${id}`);
  },
  clones({}, params) {
    const id = params.id;
    return this.$axios.post(`/api/questions/clones/${id}`);
  },
  deleteQuestionToExam({}, params) {
    const { testId, questionId } = params;
    return this.$axios.delete(`/api/exams/delete/${testId}/${questionId}`);
  },
  resetState({ commit }) {
    commit("RESET_STATE");
  },
};

export const mutations = {
  updateField,
  SET_QUESTION(state, payload) {
    const dataNew = getFormatParam(payload);
    let keys = Object.keys(dataNew);
    for (let key of keys) {
      state[key] = dataNew[key];
    }
  },
  RESET_STATE(state, payload) {
    const keys = Object.keys(state);
    const newState = JSON.parse(JSON.stringify(INIT_STATE));
    for (const key of keys) {
      state[key] = newState[key];
    }
  },
};

export const getters = {
  getField,
};
