<template>
  <v-app-bar fixed flat hide-on-scroll height="80px" class="nav py-0">
    <v-menu bottom open-on-hover tile offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-toolbar-title v-bind="attrs" v-on="on" class="mt-2 mt-lg-0">
          <router-link
            :to="{ name: 'Home' }"
            class="nav__brand text-uppercase align-center mt-0 mt-lg-2"
            ><v-img
              width="44"
              :height="site == 'creators' ? '48' : '44'"
              :src="site == 'creators' ? creatorsLogo : standardLogo"
              :laz-src="
                site == 'creators' ? creatorsLogoLazy : standardLogoLazy
              "
            ></v-img>
            <span class="align-center ml-2 mt-1 d-none d-sm-flex">{{
              title
            }}</span></router-link
          >
        </v-toolbar-title>
      </template>
      <v-card
        tile
        flat
        color="white"
        width="320px"
        class="pa-0 hidden-sm-and-down"
      >
        <v-list class="pa-0">
          <v-list-item class="pa-0">
            <v-list-item-content class="pa-0">
              <v-btn
                text
                tile
                height="72"
                class="nav__button text-uppercase justify-start"
                @click="changeSite"
              >
                <v-img
                  max-width="36"
                  max-height="40"
                  :src="site == 'creators' ? standardLogo : creatorsLogo"
                  :laz-src="
                    site == 'creators' ? standardLogoLazy : creatorsLogoLazy
                  "
                ></v-img>
                <span class="align-center mx-auto">{{
                  site == "creators" ? standardTitle : creatorsTitle
                }}</span>
              </v-btn>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
    <v-spacer></v-spacer>

    <v-toolbar-items class="nav__links hidden-md-and-down">
      <router-link
        v-for="page in pages"
        :key="page.index"
        :to="{
          name: page.name
        }"
        class="nav__link text-uppercase py-6 px-6"
        :class="
          site == 'creators' ? 'nav__link--creators' : 'nav__link--standard'
        "
      >
        {{ page.name }}
      </router-link>
    </v-toolbar-items>
    <v-menu bottom tile offset-y class="hidden-lg-and-up">
      <template v-slot:activator="{ on, attrs }">
        <v-app-bar-nav-icon
          v-bind="attrs"
          v-on="on"
          class="hidden-lg-and-up"
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
                class="nav__link text-uppercase py-7 px-6"
                :class="
                  site == 'creators'
                    ? 'nav__link--creators'
                    : 'nav__link--standard'
                "
              >
                {{ page.name }}
              </router-link>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content class="pa-0">
              <v-btn
                text
                tile
                height="72"
                class="nav__button text-uppercase justify-start pa-0"
                @click="changeSite"
              >
                <v-img
                  max-width="36"
                  max-height="40"
                  :src="site == 'creators' ? standardLogo : creatorsLogo"
                  :laz-src="
                    site == 'creators' ? standardLogoLazy : creatorsLogoLazy
                  "
                ></v-img>
                <span class="align-center mx-auto">{{
                  site == "creators" ? standardTitle : creatorsTitle
                }}</span>
              </v-btn>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { nav } from "@/constants";

export default {
  name: "Navigation",

  data: () => {
    return {
      title: nav.title,
      creatorsTitle: nav.creatorsTitle,
      creatorsLogo: nav.creatorsLogo,
      creatorsLogoLazy: nav.creatorsLogoLazy,
      standardTitle: nav.standardTitle,
      standardLogo: nav.standardLogo,
      standardLogoLazy: nav.standardLogoLazy,
      pages: [
        { path: "/build-your-brand", name: "Build Your Brand", exact: false },
        { path: "/portfolio", name: "Portfolio", exact: false },
        { path: "/pricing", name: "Pricing", exact: false },
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
      this.$store.dispatch("changeToCreators");
    },
    changeToStandard() {
      this.$store.dispatch("changeToStandard");
    },
    changeSite() {
      this.site == "creators"
        ? this.$store.dispatch("changeToStandard")
        : this.$store.dispatch("changeToCreators");
    }
  }
};
</script>

<style lang="scss" scoped>
.nav {
  z-index: 2 !important;
  text-decoration: none;
  padding: 0 80px;

  @media (max-width: $lg) {
    padding: 0 60px;
  }

  @media (max-width: $sm) {
    padding: 0 20px;
  }

  &__brand {
    font-family: $BebasNeue;
    font-size: 52px;
    text-decoration: none;
    display: inline-flex;
    color: $creator-primary;

    @media (max-width: $lg) {
      font-size: 40px;
    }
  }

  &__button {
    font-family: $BebasNeue;
    font-size: 24px !important;
  }

  &__links {
    display: inline-flex;
    height: 80px;
  }

  &__link {
    font-size: 24px;
    text-decoration: none;

    &--creators {
      font-family: $MADEEvolveSansEVO;
    }

    &--standard {
      font-family: $BebasNeue;
      letter-spacing: 0.24em;
    }

    &:hover {
      background-color: $creator-primary;
      color: $text-white;
    }
  }
}
</style>
