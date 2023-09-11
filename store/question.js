import { getField, updateField } from "vuex-map-fields";
import { QUESTION_TYPE } from "~/constants/question.js";

const stateEdit = {
  questionType: QUESTION_TYPE.MULITI,
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
};

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
        tagId: state.tagId,
        score: state.score,
        content: state.content,
        answers: state.answersMuliti,
        correctAnswers: state.correctAnswersMuliti,
        noteAnswer: state.noteAnswer,
      };
    case QUESTION_TYPE.BOOLEAN:
      return {
        type: state.questionType,
        tagId: state.tagId,
        score: state.score,
        content: state.content,
        answers: state.answersBoolean,
        correctAnswers: state.correctAnswerBoolean,
        noteAnswer: state.noteAnswer,
      };
    case QUESTION_TYPE.MATCH:
      return {
        type: state.questionType,
        tagId: state.tagId,
        score: state.score,
        content: state.content,
        matchingAnswers: state.matchingAnswers,
        matchingCorrectAnswers: state.matchingCorrectAnswers,
        noteAnswer: state.noteAnswer,
      };
    case QUESTION_TYPE.FILLBLANK:
      return {
        type: state.questionType,
        tagId: state.tagId,
        score: state.score,
        content: state.content,
        fillBlankCorrectAnswers: state.fillBlankCorrectAnswers,
        noteAnswer: state.noteAnswer,
      };
  }
}

function getFormatParam(data) {
  switch (data.type) {
    case QUESTION_TYPE.MULITI:
      return {
        questionType: data.type,
        tagId: data.tagId,
        score: data.score,
        content: data.content,
        answersMuliti: data.answers,
        correctAnswersMuliti: data.correct_answers,
        noteAnswer: data.note_answer,
      };
    case QUESTION_TYPE.BOOLEAN:
      return {
        questionType: data.type,
        tagId: data.tagId,
        score: data.score,
        content: data.content,
        answersBoolean: data.answers,
        correctAnswerBoolean: data.correct_answers,
        noteAnswer: data.note_answer,
      };
    case QUESTION_TYPE.MATCH:
      return {
        questionType: data.type,
        tagId: data.tagId,
        score: data.score,
        content: data.content,
        matchingAnswers: data.matching_answers,
        matchingCorrectAnswers: data.matching_correct_answers,
        noteAnswer: data.note_answer,
      };
    case QUESTION_TYPE.FILLBLANK:
      return {
        questionType: data.type,
        tagId: data.tagId,
        score: data.score,
        content: data.content,
        fillBlankCorrectAnswers: data.fill_blank_correct_answers,
        noteAnswer: data.note_answer,
      };
  }
}

export const state = () => JSON.parse(JSON.stringify(INIT_STATE));

export const actions = {
  async getQuestion({ commit }, params) {
    try {
      const response = await this.$axios.get(`/api/group-questions`, {
        params,
      });
      if (response?.data?.status === "success") {
        commit("SET_QUESTION", response?.data?.data || {});
      }
    } catch (error) {
      console.log(error);
    }
    return;
  },
  create({ state }) {
    return this.$axios.post("/api/group-questions", getConvertParam(state));
  },
  update({}, params) {
    const { id, payload } = params;
    return this.$axios.put(
      `/api/group-questions/${id}`,
      getConvertParam(state)
    );
  },
  delete({}, params) {
    const id = params.id;
    return this.$axios.delete(`/api/group-questions/${id}`);
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
