import * as http from 'axios';

const config = {
  baseURL: process.env.VUE_APP_BASE_URL ?? '//api.local/',
};

const axios = http.create(config);

export default axios;
