/* eslint-disable no-shadow */

const namespaced = true;

const state = {
  errorHandler_messages: [],
};

const getters = {
  errorHandler_messages: (state) => state.errorHandler_messages,
};

const mutations = {
  errorHandler_PUSH_MESSAGE: (state, payload) => {
    state.messages.push(payload);
  },

  errorHandler_REMOVE_MESSAGE: (state, payload) => {
    const position = state.messages.findIndex((element) => element.timestamp === payload);
    state.messages.splice(position, 1);
  },
};

const actions = {
  errorHandler_postMessage({ commit }, payload) {
    const timestamp = new Date().getUTCMilliseconds();

    let message = 'Error Request';
    let textMessage = '';

    if (payload.response && payload.response.data) {
      if (payload.response.data.error) {
        message = payload.response.data.error;
        textMessage = payload.response.data.message;
      } else {
        message = payload.response.data.message;
        textMessage = payload.response.data.errorMessage;
      }
    } else {
      textMessage = payload.message;
    }

    const data = {
      timestamp,
      message,
      textMessage,
    };

    commit('errorHandler_PUSH_MESSAGE', data);
  },
};

export default {
  namespaced,
  state,
  getters,
  mutations,
  actions,
};
