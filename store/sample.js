import { getField, updateField } from "vuex-map-fields";

export const state = () => ({
  resetFlag: 0,
  isSelectedSite: false,
});

export const actions = {
  getLog({ commit, state }, payload) {
    return this.$axios.get(`/categories/all`, { payload });
  },
  login({ }, payload) {
    return this.$axios.post("/auth/login", payload);
  },
};
export const mutations = {
  updateField,
  SET_IS_SELECTED_SITE(state, payload) {
    state.isSelectedSite = payload;
  },
};

export const getters = {
  getField,
};
