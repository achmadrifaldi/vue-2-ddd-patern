import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// Import all of the resource store files.
function loadStores() {
  const context = require.context('@/modules', true, /store.js$/i);
  return context
    .keys()
    .map((key) => ({ key, name: key.match(/([a-z_]+)\.store.js$/i)[1] }))
    .reduce((modules, { key, name }) => ({ ...modules, [name]: context(key).default }), {});
}

const modules = loadStores();
export default new Vuex.Store({
  modules,
});
