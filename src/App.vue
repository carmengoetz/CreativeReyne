<template>
  <v-app>
    <Navigation />
    <v-main class="pt-16">
      <div class="content-container">
        <ParticlesJS class="content" />
        <router-view :key="$route.path" class="content" />
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
  data: () => {
    return {
      appTitle: "Awesome App",
      sidebar: false,
      pages: [
        { path: "/portfolio", name: "Portfolio", exact: false },
        { path: "/pricing", name: "Pricing", exact: false },
        { path: "/contact", name: "Contact", exact: false }
      ]
    };
  }
};
</script>

<style lang="scss">
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

.content-container {
  display: grid;
  background-color: #272727;
}

.content {
  grid-column: 1;
  grid-row: 1;
}
</style>
