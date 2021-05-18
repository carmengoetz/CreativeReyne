<template>
  <v-app-bar absolute elevate-on-scroll height="80px" class="nav py-0">
    <v-menu bottom open-on-hover tile offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-toolbar-title v-bind="attrs" v-on="on" class="mt-2 mt-lg-0">
          <router-link
            :to="{ name: 'Home' }"
            class="nav__brand align-center mt-2"
            ><v-img
              lazy-src=""
              width="40"
              height="44"
              src="../assets/images/creators-logo-thumb.png"
            ></v-img
            ><span class="align-center ml-2 mt-1"
              >Creative Reyne</span
            ></router-link
          >
        </v-toolbar-title>
      </template>
      <v-card tile flat color="white" width="300px" class="pa-0 brand__button">
        <v-list class="pa-0">
          <v-list-item v-if="site == 'standard'" class="pa-0">
            <v-list-item-content class="pa-0">
              <v-btn
                text
                tile
                height="72"
                class="justify-start"
                @click="changeToCreators"
              >
                <v-img
                  lazy-src=""
                  max-width="36"
                  max-height="40"
                  src="../assets/images/creators-logo-thumb.png"
                ></v-img>
                Content Creators
              </v-btn>
            </v-list-item-content>
          </v-list-item>
          <v-list-item v-if="site == 'creators'" class="pa-0">
            <v-list-item-content class="pa-0">
              <v-btn
                text
                tile
                height="72"
                class="justify-start"
                @click="changeToStandard"
              >
                <v-img
                  lazy-src=""
                  max-width="36"
                  max-height="40"
                  src="../assets/images/creators-logo-thumb.png"
                ></v-img>
                Standard Business
              </v-btn>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
    <v-spacer></v-spacer>

    <v-toolbar-items class="nav__links hidden-sm-and-down">
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
    </v-toolbar-items>
    <v-menu bottom tile offset-y class="hidden-md-and-up">
      <template v-slot:activator="{ on, attrs }">
        <v-app-bar-nav-icon
          v-bind="attrs"
          v-on="on"
          class="hidden-md-and-up"
        ></v-app-bar-nav-icon>
      </template>
      <v-card>
        <v-list class="pa-0">
          <v-list-item v-for="page in pages" :key="page.index" class="pa-0">
            <v-list-item-content class="pa-0">
              <router-link
                :to="{
                  name: page.name
                }"
                class="nav__link"
              >
                {{ page.name }}
              </router-link>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
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
  },
  computed: {
    site() {
      return this.$store.state.site;
    }
  },
  methods: {
    changeToCreators() {
      // eslint-disable-next-line no-debugger
      debugger;
      // Dispatch the action to buy a TV
      this.$store.dispatch("changeToCreators");
    },
    changeToStandard() {
      // eslint-disable-next-line no-debugger
      debugger;
      // Dispatch the action to buy two TVs
      this.$store.dispatch("changeToStandard");
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");

.nav {
  text-transform: uppercase;
  text-decoration: none;
  padding: 0 80px;

  @media (max-width: $lg) {
    padding: 0 60px;
  }
  &__brand {
    font-family: "Bebas Neue", sans-serif;
    font-size: 52px;
    text-transform: uppercase;
    text-decoration: none;
    display: inline-flex;
    color: $creator-primary;

    @media (max-width: $lg) {
      font-size: 40px;
    }
  }

  &__button {
    text-align: start;
  }
  &__links {
    display: inline-flex;
    height: 80px;
  }

  &__link {
    font-family: $MADEEvolveSansEVO, sans-serif;
    font-size: 20px;
    text-transform: uppercase;
    text-decoration: none;
    padding: 28px 24px;

    &:hover {
      background-color: $creator-primary;
      color: $text-white;
    }
  }
}
</style>
