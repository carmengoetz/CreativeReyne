<template>
  <v-app-bar absolute elevate-on-scroll height="100px" class="nav py-0">
    <v-menu open-on-hover bottom offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-toolbar-title v-bind="attrs" v-on="on">
          <router-link
            :to="{ name: 'Home' }"
            class="nav__brand mt-1"
            v-bind="attrs"
            v-on="on"
            ><v-img
              class="mt-2"
              lazy-src=""
              width="78"
              height="78"
              src="../assets/images/creators-logo-thumb.png"
            ></v-img
            >Creative Reyne</router-link
          >
        </v-toolbar-title>
      </template>
      <v-btn tile color="white" height="72px" width="400px" class="pa-0 mt-0">
        <v-img
          lazy-src=""
          max-width="50"
          max-height="50"
          src="../assets/images/creators-logo-thumb.png"
        ></v-img
        >Standard Business
      </v-btn>
    </v-menu>
    <v-spacer></v-spacer>

    <v-item-group class="nav__links">
      <router-link
        v-for="page in pages"
        :key="page.index"
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
        { path: "/pricing", name: "Pricing", exact: false },
        { path: "/portfolio", name: "Portfolio", exact: false },
        { path: "/contact", name: "Contact", exact: false }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");

.nav {
  text-transform: uppercase;
  text-decoration: none;
  padding: 0 80px;

  &__brand {
    font-family: "Bebas Neue", sans-serif;
    font-size: 64px;
    text-transform: uppercase;
    text-decoration: none;
    display: inline-flex;
    color: $creator-primary;
  }

  &__links {
    display: inline-flex;
    height: 100px;
  }

  &__link {
    font-family: $MADEEvolveSansEVO, sans-serif;
    font-size: 24px;
    text-transform: uppercase;
    text-decoration: none;
    padding: 32px 24px;

    &:hover {
      background-color: $creator-primary;
      color: $text-white;
    }
  }
}
</style>
