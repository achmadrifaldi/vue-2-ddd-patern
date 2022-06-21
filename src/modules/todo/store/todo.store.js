/* eslint-disable no-shadow */

const namespaced = true;

const state = {
  todo_results: [],
};

const getters = {
  todo_results: (state) => state.todo_results,
};

const mutations = {
  todo_PUSH_RESULTS: (state, payload) => {
    state.todo_results.push(payload);
  },
};

const actions = {
  async todo_getTodo({ commit }) {
    const todoResult = await window.axios.post('/todo');

    commit('PUSH_RESULTS', todoResult);
  },
};

export default {
  namespaced,
  state,
  getters,
  mutations,
  actions,
};
