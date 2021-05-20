<template>
  <v-app
    class="app"
    :class="
      site == 'creators'
        ? 'app__creators'
        : $route.name == 'Portfolio' || $route.name == 'Brand'
        ? 'app__standard--blue'
        : 'app__standard--pink'
    "
  >
    <Navigation />
    <v-main>
      <div class="app__container py-0 py-md-16">
        <!-- <ParticlesJS v-if="site == 'creators'" class="app__container--content1" /> -->
        <router-view :key="$route.path" class="app__container--content2" />
      </div>
    </v-main>
    <Footer :site="site" />
  </v-app>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";
// import ParticlesJS from "@/components/ParticlesJS.vue";

export default {
  name: "App",
  components: {
    Navigation,
    Footer
    // ParticlesJS,
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

.app {
  font-family: $AcuminPro;

  &__creators {
    background: $creator-primary !important;
  }

  &__standard {
    &--blue {
      background-color: $standard-secondary !important;
    }
    &--pink {
      background: $standard-primary !important;
    }
  }

  &__container {
    display: grid;

    &--content1,
    &--content2 {
      grid-column: 1;
      grid-row: 1;
      overflow: hidden;
    }

    &--content2 {
      margin-top: 80px;
      z-index: 1;
    }
  }
}
</style>
