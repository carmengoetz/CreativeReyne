<template>
  <v-app-bar absolute color="white" elevate-on-scroll class="nav">
    <v-toolbar-title>
      <router-link :to="{ name: 'Home' }" class="nav__brand"
        >Creative Reyne</router-link
      >
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <v-item-group class="nav__links">
      <router-link
        v-for="page in pages"
        :key="page.name"
        :to="{
          name: page.name
        }"
        class="nav__link"
      >
        {{ page.name }}
      </router-link>
    </v-item-group>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navigation",

  data: () => {
    return {
      pages: [
        { path: "/portfolio", name: "Portfolio", exact: false },
        { path: "/pricing", name: "Pricing", exact: false },
        { path: "/contact", name: "Contact", exact: false }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

.nav {
  text-transform: uppercase;
  text-decoration: none;
  color: #272727;

  &__brand {
    font-family: "Bebas Neue", cursive;
    font-size: 48px;
    margin-left: 80px;
    text-transform: uppercase;
    text-decoration: none;
    color: #272727;
  }

  &__links {
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 24px;
    margin: auto 80px;
  }

  &__link {
    font-family: "Montserrat", sans-serif;
    text-transform: uppercase;
    text-decoration: none;
    color: #272727;
  }
}
</style>
