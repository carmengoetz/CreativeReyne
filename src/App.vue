<template>
  <v-app>
    <Navigation />
    <v-main class="pt-16">
      <div class="app-container pt-9">
        <ParticlesJS v-if="site == 'creators'" class="app-container__content" />
        <router-view :key="$route.path" class="app-container__content" />
      </div>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";
import ParticlesJS from "@/components/ParticlesJS.vue";
export default {
  name: "App",
  components: {
    Navigation,
    Footer,
    ParticlesJS
  },
  computed: {
    site() {
      return this.$store.state.site;
    }
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: "BebasNeue";
  src: url("./assets/fonts/BebasNeue-Regular.ttf") format("truetype");
}

@font-face {
  font-family: "MADEEvolveSansEVO";
  src: url("./assets/fonts/MADE\ Evolve\ Sans\ Regular\ EVO.otf")
    format("opentype");
}

@font-face {
  font-family: "MADEEvolveSans";
  src: url("./assets/fonts/MADE\ Evolve\ Sans\ Regular.otf") format("opentype");
}

@font-face {
  font-family: "AcuminPro";
  src: url("./assets/fonts/Acumin-RPro.otf") format("opentype");
}

@font-face {
  font-family: "Consolas";
  src: url("./assets/fonts/CONSOLA.TTF") format("truetype");
}

#app {
  background-color: $creator-primary;
  width: unset;
  font-family: $AcuminPro;
}

.app-container {
  display: grid;
  &__content {
    grid-column: 1;
    grid-row: 1;
  }
}
</style>
