<template>
  <v-app-bar absolute elevate-on-scroll class="nav">
    <v-toolbar-title>
      <router-link :to="{ name: 'Home' }" class="nav__brand"
        ><v-img
          class="mt-2"
          lazy-src=""
          width="50"
          height="50"
          src="../assets/images/creators-logo-thumb.png"
        ></v-img
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
  padding: 4px 80px;

  &__brand {
    font-family: "Bebas Neue", cursive;
    font-size: 48px;
    // margin-left: 80px;
    text-transform: uppercase;
    text-decoration: none;
    display: inline-flex;
  }

  &__links {
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 24px;
    // margin: auto 80px;
  }

  &__link {
    font-family: "MADEEvolveSansRegularEVO";
    font-size: 24px;
    text-transform: uppercase;
    text-decoration: none;
  }

  // .router-link-exact-active {
  //   color: red;
  // }
}
</style>
