<template>
  <v-app>
    <Navigation />
    <v-main class="pt-16">
      <div class="app-container pt-9">
        <ParticlesJS class="app-container__content" />
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
  }
};
</script>

<style lang="scss">
@import "~vuetify/src/styles/styles.sass";

@font-face {
  font-family: "MADEEvolveSansRegularEVO";
  src: url("./assets/fonts/MADE\ Evolve\ Sans\ Regular\ EVO.otf")
    format("opentype"); /* IE6-IE8 */
}

@font-face {
  font-family: "MADEEvolveSansMediumEVO";
  src: url("./assets/fonts/MADE\ Evolve\ Sans\ Medium\ EVO.otf")
    format("opentype"); /* IE6-IE8 */
}

#app {
  background-color: $creator-primary;
}

.app-container {
  display: grid;
  &__content {
    grid-column: 1;
    grid-row: 1;
  }
}
</style>
