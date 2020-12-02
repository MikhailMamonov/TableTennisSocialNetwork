import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios';
import router from './router';
import store from './store/store';

Vue.prototype.$http = Axios;
Axios.defaults.baseURL = process.env.API_ENDPOINT;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

Axios.interceptors.request.use((config) => {

  const authToken = store.getters['auth/authToken'];
  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`;
  }
  return config;
}, (err) => {
  return Promise.reject(err);
});
