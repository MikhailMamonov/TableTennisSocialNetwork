import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import * as Cookies from 'js-cookie';
import auth from './modules/auth';
import user from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState({
    getState: (key) => Cookies.getJSON(key),
    setState: (key, state) => Cookies.set(key, state, { expires: 3, secure: true })
    })
    ],
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    auth: {
      namespaced: true,
      state: auth.state,
      mutations: auth.mutations,
      getters: auth.getters,
      actions: auth.actions,
 },
    user: {
      namespaced: true,
      state: user.state,
      actions: user.actions,
      mutations: user.mutations,
      getters: user.getters,
  },
},
});
