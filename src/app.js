import '@fortawesome/fontawesome-free/css/all.css';
import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';
import '../assets/app.styl';

Vue.use(Vuetify, {
  iconfont: 'fa',
  theme   : {
    primary  : '#3c2520',
    secondary: '#999999',
    accent   : '#957964',
    info     : '#333333'
  }
});

new Vue({
          el    : '#app',
          render: h => h(App)
        });
