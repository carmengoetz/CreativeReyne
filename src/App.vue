<template>
  <div class="app">
    <CreatorsParticlesJS
      v-if="
        site == 'creators' ||
          $route.name == 'Landing' ||
          $route.name == 'FourOhFour'
      "
      class="app--content1"
    />
    <StandardParticlesJS v-else class="app--content1" />
    <v-app
      class="app--content2"
      :class="
        $route.name == 'Landing' || $route.name == 'FourOhFour'
          ? 'app__landing'
          : site == 'creators'
          ? 'app__creators'
          : $route.name == 'Home'
          ? 'app__standard--home'
          : 'app__standard'
      "
    >
      <div v-if="$route.name == 'Landing'" class="mt-4 py-16">
        <router-view :key="$route.path" />
      </div>
      <div v-else>
        <Navigation />
        <v-main class="pb-16">
          <div class="mt-4 py-16">
            <transition name="fade" mode="out-in">
              <router-view :key="$route.path" />
            </transition>
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
import CreatorsParticlesJS from "@/components/CreatorsParticlesJS.vue";
import StandardParticlesJS from "@/components/StandardParticlesJS.vue";

export default {
  name: "App",
  components: {
    Navigation,
    Footer,
    CreatorsParticlesJS,
    StandardParticlesJS
  },
  computed: {
    site() {
      return this.$store.state.site;
    }
  }
};
</script>

<style lang="scss">
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
    background: url("./assets/images/landing-page.png") !important;
    background-position: center center !important;
    background-size: cover !important;
    background-repeat: no-repeat !important;
  }

  &__creators {
    background: $creator-primary !important;
  }

  &__standard {
    background: linear-gradient(
      140deg,
      $standard-primary 20%,
      $standard-secondary 80%
    ) !important;

    &--home {
      background-image: url("./assets/images/standard-home.png"),
        linear-gradient(180deg, #2b2b2b -27.49%, #f3797b 38.16%) !important;
      background-size: contain !important;
      background-position: center 0 !important;
      background-repeat: no-repeat !important;

      @media (max-width: $lg) {
        background: linear-gradient(
          140deg,
          $standard-primary 20%,
          $standard-secondary 80%
        ) !important;
      }

      @media (min-width: 2600px) {
        background: linear-gradient(
          140deg,
          $standard-primary 20%,
          $standard-secondary 80%
        ) !important;
      }
    }
  }

  &__footer {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}
</style>
