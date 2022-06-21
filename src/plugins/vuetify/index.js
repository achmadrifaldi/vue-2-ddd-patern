import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: { customProperties: true },
    themes: {
      light: {
        primary: '#3889C9',
        darkBlue: '#003F79',
        dark: '#1A051D',
        lightGray: '#83A4C3',
        lightBlue: '#0093D9',
        sea: '#D5E9FA',
        success: '#00C48C',
        error: '#ff5252',
        white: '#FFFFFF',
      },
    },
  },
});
