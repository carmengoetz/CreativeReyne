<template>
  <v-app>
    <Navigation />
    <v-main class="pt-16">
      <ParticlesJS>
        <router-view :key="$route.path" />
      </ParticlesJS>
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
</style>
