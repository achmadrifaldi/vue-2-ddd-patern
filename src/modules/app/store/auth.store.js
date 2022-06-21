/* eslint-disable no-shadow */

// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';

const namespaced = true;

const state = {
  auth_token: '',
  auth_fullName: '',
  auth_username: '',
};

const getters = {
  auth_isAuthenticated: (state) => !!state.token,
  auth_token: (state) => state.token,
};

const mutations = {
  auth_SET_LOGIN: (state, payload) => {
    state.auth_token = payload.accessToken;
    state.auth_fullName = payload.user.fullName;
    state.auth_username = payload.user.username;
  },
  auth_CLEAR_SESSION: (state) => {
    state.auth_token = '';
    state.auth_fullName = '';
    state.auth_username = '';
  },
};

const actions = {
  /**
   * @description Login
   *
   * @method POST
   * @url SECURITY/auth/login
   * @access public
   *
   * @return {any}
   */
  async auth_login({ commit }, payload) {
    try {
      const authResult = await window.axios.post('/SECURITY/auth/login', payload);

      const { accessToken } = authResult.data.data;
      const user = jwt_decode(accessToken);

      const sessionData = {
        accessToken,
        user,
      };

      commit('SET_USER_LOGIN', sessionData);

      return authResult.data.data;
    } catch (error) {
      return error;
    }
  },

  /**
   * @description Logout
   *
   * @return {void}
   */
  auth_logout({ commit }) {
    localStorage.clear();
    commit('auth_CLEAR_SESSION');
  },
};

export default {
  namespaced,
  state,
  getters,
  mutations,
  actions,
};
