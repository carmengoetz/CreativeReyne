<template>
  <v-container class="home my-8 my-md-16">
    <v-row no-gutters class="mt-0 mt-xl-16">
      <v-col cols="12" lg="5" class="mt-0 mt-md-8 mt-xl-16">
        <v-img
          v-if="site == 'creators'"
          class="home__image mx-auto mt-4 mt-xl-n8"
          max-height="584"
          width="600"
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
        <v-img
          v-else
          class="home__image mx-auto"
          max-height="488"
          width="500"
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
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12" lg="7">
        <v-row
          no-gutters
          justify="center"
          justify-lg="start"
          class="mt-0 mt-md-8 mt-xl-16"
        >
          <v-card-title
            class="home__title white--text my-0 mt-md-16 text-center"
            :class="
              site == 'creators'
                ? 'home__title--creators'
                : 'home__title--standard'
            "
          >
            {{ title }}
          </v-card-title>
        </v-row>
        <v-row
          no-gutters
          justify="center"
          justify-lg="start"
          class="mx-sm-auto"
        >
          <v-card-subtitle
            class="home__subtitle white--text mt-0 mt-md-10 mx-auto mx-md-n2"
          >
            {{ subtitle }}
          </v-card-subtitle>
        </v-row>
        <v-row
          no-gutters
          justify="center"
          justify-lg="start"
          class="mt-0 mt-lg-16"
        >
          <Button
            v-for="button in buttons"
            :key="button.index"
            :name="button.name"
            :to="button.to"
          />
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Button from "@/components/Button.vue";
import { home } from "@/constants";

export default {
  name: "Home",
  components: {
    Button
  },
  data: () => {
    return {
      title: home.title,
      subtitle: home.subtitle,
      creatorsLogo: home.creatorsLogo,
      creatorsLogoLazy: home.creatorsLogoLazy,
      standardLogo: home.standardLogo,
      standardLogoLazy: home.standardLogoLazy,
      buttons: [
        {
          name: "Build Your Brand",
          to: "Build Your Brand"
        },
        {
          name: "Portfolio",
          to: "Portfolio"
        },
        {
          name: "Contact",
          to: "Contact"
        }
      ]
    };
  },
  computed: {
    site() {
      return this.$store.state.site;
    }
  }
};
</script>

<style scoped lang="scss">
.home {
  &__title {
    font-size: 108px;
    word-break: normal !important;

    &--creators {
      font-family: $MADEEvolveSansEVO !important;
    }

    &--standard {
      font-family: $BebasNeue !important;
      color: $text-black !important;
    }

    @media (max-width: $xl) {
      font-size: 88px;
    }
    @media (max-width: $md) {
      line-height: 3rem;
    }
    @media (max-width: $sm) {
      font-size: 60px;
    }
  }

  &__subtitle {
    font-size: 40px;
    word-break: normal !important;

    @media (max-width: $xl) {
      font-size: 32px;
    }

    @media (max-width: $xl) {
      line-height: 2rem;
    }
  }
}
</style>
