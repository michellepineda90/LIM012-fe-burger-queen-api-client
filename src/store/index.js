import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    employees: [],
  },
  mutations: {
    setEmployees(state, payload) {
      console.log(payload);
      state.employees = payload;
    },
  },
  actions: {
    getEmployees({ commit }) {
      axios
        .get('http://localhost:3000/users')
        .then((result) => {
          commit('setEmployees', result.data);
        });
    },
    deleteEmployee({ dispatch }, payload) {
      axios
        .delete(`http://localhost:3000/users:${payload}`)
        .then(() => {
          dispatch('getEmployees');
        });
    },
  },
  modules: {
  },
});
