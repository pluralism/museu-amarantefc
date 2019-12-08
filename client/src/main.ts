import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
const VueGoogleMaps = require('vue2-google-maps');

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBGktGhQMccIyaS6RIDCbC1UQp4n1OEgFE'
  }
});

const base = axios.create({
  baseURL: 'http://localhost:8080/api/v1/'
});

Vue.prototype.$http = base;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');