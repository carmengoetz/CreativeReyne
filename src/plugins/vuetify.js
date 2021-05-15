import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#202020",
        secondary: "#D51F26",
        textWhite: "#FFFFFF",
        textBlack: "#1A1A1A"
      }
    }
  }
});

export default vuetify;
