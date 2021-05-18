import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    site: "creators"
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
  }
});
