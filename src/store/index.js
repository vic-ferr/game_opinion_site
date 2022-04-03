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
      console.log("mutacion", payload);
    },
  },
  actions: {
    async gameData({ commit }) {
      const URL = "/public/game.json";
      const response = await axios.get(URL);
      console.log("response", response.data);
      commit("SET_DATA_GAME", response);
    },
  },
});
