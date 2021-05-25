<template>
  <div class="app">
    <ParticlesJS
      v-if="site == 'creators' || $route.name == 'Landing'"
      class="app--content1"
    />
    <v-app
      class="app--content2"
      :class="
        $route.name == 'Landing'
          ? 'app__landing'
          : site == 'creators'
          ? 'app__creators'
          : $route.name == 'Portfolio' || $route.name == 'Brand'
          ? 'app__standard--blue'
          : 'app__standard--pink'
      "
    >
      <div v-if="$route.name == 'Landing'" class="mt-4 py-16">
        <router-view :key="$route.path" />
      </div>
      <div v-else>
        <Navigation />
        <v-main class="pb-16">
          <div class="mt-4 py-16">
            <router-view :key="$route.path" />
          </div>
        </v-main>
        <Footer :site="site" class="app__footer" />
      </div>
    </v-app>
  </div>
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

.app {
  font-family: $AcuminPro;
  display: grid;

  &--content1,
  &--content2 {
    grid-column: 1;
    grid-row: 1;
    overflow: hidden;
  }

  &--content1 {
    height: 80vh;
    min-height: 100%;
  }

  &__landing {
    z-index: 1;
    background: transparent url("./assets/images/landing-page.svg") top right
      no-repeat !important;
    background-attachment: fixed;
    width: 100%;

    @media (max-width: $xl) {
      background: -webkit-linear-gradient(transparent, rgba(135, 60, 255, 0) 0%),
        -webkit-linear-gradient(10deg, transparent 50%, $standard-primary 0%) !important;
    }

    @media (max-width: $md) {
      background: -webkit-linear-gradient(transparent, rgba(135, 60, 255, 0) 0%),
        -webkit-linear-gradient(-80deg, transparent 41%, $standard-primary 0%) !important;
    }
  }

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

  &__footer {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
}
</style>
