import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './stores/app.stores';
const VueGoogleMaps = require('vue2-google-maps');

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBGktGhQMccIyaS6RIDCbC1UQp4n1OEgFE'
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');