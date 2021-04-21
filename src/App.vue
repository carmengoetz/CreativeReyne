<template>
  <v-app>
    <Navigation />
    <v-main>
      <router-view :key="$route.path" />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Navigation,
    Footer
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
