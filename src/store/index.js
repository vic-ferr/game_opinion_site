import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
console.log("hola hola");
export default new Vuex.Store({
  state: {
    gameState: [],
    opinionState: [],
  },
  getters: {},
  mutations: {
    SET_DATA_GAME(state, payload) {
      state.gameState = payload;
    },
    PUSH_MUTATION(state, payload) {
      state.gameState.push(payload);
    },
  },
  actions: {
    async gameData({ commit }) {
      try {
        const response = await axios("datos.json");
        console.log(response.data);
        commit("SET_DATA_GAME", response.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
