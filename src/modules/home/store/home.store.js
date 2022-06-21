/* eslint-disable no-shadow */
const namespaced = true;

const state = {
  home_title: '',
  home_loading: false,
};

const getters = {
  home_title: (state) => state.home_title,
  home_loading: (state) => state.home_loading,
};

const mutations = {
  home_SET_TITLE: (state, payload) => {
    state.home_title = payload;
  },
  hoem_SET_LOADING: (state, payload) => {
    state.home_loading = payload;
  },
};

const actions = {
  /**
   * @description Get Description
   *
   * @method Place your method here
   * @url place your api endpoint here
   * @access public
   *
   * @return {any}
   */
  async home_getTitle({ commit }) {
    commit('hoem_SET_LOADING', true);

    try {
      commit('home_SET_TITLE', 'Welcome to Your Vue.js DDD App');

      return Promise.resolve;
    } catch (err) {
      return Promise.reject(err);
    } finally {
      commit('hoem_SET_LOADING', false);
    }
  },
};

export default {
  namespaced,
  state,
  getters,
  mutations,
  actions,
};
