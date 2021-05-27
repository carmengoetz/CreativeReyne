<template>
  <v-container class="landing mt-n8 mt-xl-16">
    <v-row>
      <v-card-title
        class="landing__title mx-auto text-uppercase text-center mb-0 mb-md-16"
        >{{ title }}</v-card-title
      >
    </v-row>
    <v-row>
      <v-col cols="12" md="5" @click="changeToCreators">
        <router-link :to="{ name: 'Home' }" class="landing__link">
          <v-img
            class="home__image mx-auto mt-0 mt-md-16 mt-lg-6 mt-xl-8 mb-0 mb-md-16"
            width="405"
            :src="creatorsLogo"
            :lazy-src="creatorsLogoLazy"
            ><template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row> </template
          ></v-img>
          <v-row>
            <v-card-title
              class="landing__subtitle landing__subtitle--creators mx-auto text-center my-0 my-xl-6"
            >
              {{ creatordsSubtitle }}</v-card-title
            >
          </v-row>
        </router-link>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12" md="5" @click="changeToStandard">
        <router-link :to="{ name: 'Home' }" class="landing__link">
          <v-img
            class="home__image mx-auto mt-8 mt-md-12 mt-xl-16 mb-0 mb-md-16"
            max-height="348"
            width="350"
            :src="standardLogo"
            :lazy-src="standardLogoLazy"
            ><template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row> </template
          ></v-img>
          <v-row>
            <v-card-title
              class="landing__subtitle landing__subtitle--standard mx-auto text-uppercase text-center my-10 my-xl-16"
            >
              {{ standardSubtitle }}</v-card-title
            >
          </v-row>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { landing } from "@/constants";

export default {
  name: "Landing",
  components: {},
  data: () => {
    return {
      title: landing.title,
      creatorsLogo: landing.creatorsLogo,
      creatorsLogoLazy: landing.creatorsLogoLazy,
      creatordsSubtitle: landing.creatorsSubtitle,
      standardLogo: landing.standardLogo,
      standardLogoLazy: landing.standardLogoLazy,
      standardSubtitle: landing.standardSubtitle
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
    }
  }
};
</script>

<style scoped lang="scss">
.landing {
  &__title {
    font-size: 110px;
    word-break: normal !important;
    font-family: $BebasNeue !important;
    letter-spacing: 0.24em;
    color: $text-white;

    @media (max-width: $xl) {
      font-size: 80px;
      line-height: 4rem;
    }
    @media (max-width: $md) {
      font-size: 60px;
      line-height: 3rem;
    }
    @media (max-width: $sm) {
      font-size: 40px;
      line-height: 2rem;
    }
  }

  &__subtitle {
    font-size: 60px;
    word-break: normal !important;
    color: $text-white;

    &--creators {
      font-family: $MADEEvolveSansEVO !important;
    }

    &--standard {
      font-family: $BebasNeue !important;
      letter-spacing: 0.24em;
    }

    @media (max-width: $xl) {
      font-size: 44px;
    }

    @media (max-width: $lg) {
      font-size: 36px;
    }
  }

  &__link {
    text-decoration: none;
  }
}
</style>
