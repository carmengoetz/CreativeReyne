import Vuex from "vuex";
import Vue from "vue";
import VuexPersistence from "vuex-persist";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    site: "standard"
  },

  getters: {},

  mutations: {
    changeToCreators(state) {
      state.site = "creators";
    },
    changeToStandard(state) {
      state.site = "standard";
    }
  },

  actions: {
    changeToCreators(context) {
      context.commit("changeToCreators");
    },
    changeToStandard(context) {
      context.commit("changeToStandard");
    }
  },

  plugins: [new VuexPersistence().plugin]
});
