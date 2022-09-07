import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  rtl:false,
  theme: { 
    dark:false,
      options: {
        customProperties: true,
      },
    themes: {
      
      light: {
        primary: '#007BFF',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        backgroung:'#F0F4FF',
        razi:'#aeddff'
      },
    },
  },
});
