import Vue from 'vue';
import * as http from 'axios';
import store from '../../modules/app/store';

const config = {
  baseURL: process.env.VUE_APP_BASE_URL ?? '//api.local/',
  headers: { 'Device-Type': 0 },
};

const axios = http.create(config);

axios.interceptors.response.use(undefined, error => {
  const errorResponse = error?.response;
  store.dispatch('errorHandler/errorHandler_postMessage', errorResponse);

  return Promise.reject(error);
});

// eslint-disable-next-line no-shadow
Plugin.install = Vue => {
  window.axios = axios;
  Object.defineProperties(Vue.prototype, {
    $axios: {
      get() {
        return axios;
      },
    },
  });
};

Vue.use(Plugin);

export default Plugin;
