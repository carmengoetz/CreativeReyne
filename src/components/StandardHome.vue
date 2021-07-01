<template>
  <div>
    <v-row no-gutters class="mt-0">
      <v-img
        class="home__image mx-auto"
        max-width="300"
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
    </v-row>
    <v-row no-gutters justify="center" class="mt-7">
      <v-card-title
        class="home__title white--text my-0 text-center home__title--standard"
      >
        Creative Reyne
      </v-card-title>
    </v-row>

    <v-row no-gutters justify="center">
      <v-card-title class="home__extra white--text text-center">
        Design and Print
      </v-card-title>
    </v-row>
    <v-row no-gutters justify="center" class="mx-sm-auto mt-0 mt-md-2 mt-xl-8">
      <v-card-subtitle class="home__subtitle white--text text-center">
        {{ standardSubtitle }}
      </v-card-subtitle>
    </v-row>
    <v-row no-gutters justify="center" class="mt-0 mt-md-8 mt-xl-16">
      <Button
        v-for="button in buttons"
        :key="button.index"
        :name="button.name"
        :to="button.to"
      />
    </v-row>
  </div>
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
      standardSubtitle: home.standardSubtitle,
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
    font-size: 88px;
    word-break: normal !important;
    &--standard {
      font-family: $BebasNeue !important;
    }

    @media (max-width: $md) {
      line-height: 3rem;
    }
    @media (max-width: $sm) {
      font-size: 60px;
    }
  }

  &__extra {
    font-family: $BebasNeue !important;
    font-size: 100px;
    letter-spacing: 0.515em;
    word-break: normal !important;
    margin-top: 420px;

    @media (max-width: $xl) {
      font-size: 80px;
    }

    @media (max-width: $lg) {
      font-size: 60px;
      margin-top: 150px;
    }

    @media (max-width: $md) {
      font-size: 48px;
      line-height: 0.8em;
    }
  }

  &__subtitle {
    font-size: 64px;
    word-break: normal !important;

    @media (max-width: $xl) {
      font-size: 56px;
    }

    @media (max-width: $lg) {
      font-size: 48px;
    }

    @media (max-width: $md) {
      font-size: 32px;
    }

    @media (max-width: $sm) {
      font-size: 28px;
    }
  }
}
</style>
