import Vue from 'vue';
import App from './modules/app/ui/App.vue';
import router from './modules/app/router';
import store from './modules/app/store';
import eventBus from './plugins/eventBus/eventBus';

import './modules/app/ui/components';
import './plugins';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  eventBus,
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
