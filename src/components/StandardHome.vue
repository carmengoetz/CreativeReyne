<template>
  <div>
    <v-row no-gutters class="mt-0">
      <v-img
        class="home__image mx-auto d-lg-none d-xl-flex"
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

      <v-img
        class="home__image mx-auto d-none d-lg-flex d-xl-none mt-n8"
        max-width="200"
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

    @media (max-width: 2250px) {
      margin-top: 400px;
    }

    @media (max-width: 2200px) {
      margin-top: 380px;
    }

    @media (max-width: 2150px) {
      margin-top: 340px;
    }

    @media (max-width: 2100px) {
      margin-top: 320px;
    }

    @media (max-width: 2050px) {
      margin-top: 300px;
    }

    @media (max-width: 2000px) {
      margin-top: 280px;
    }

    @media (max-width: 1950px) {
      margin-top: 240px;
    }

    @media (max-width: $xl) {
      margin-top: 400px;
      font-size: 80px;
    }

    @media (max-width: 1850px) {
      margin-top: 370px;
    }

    @media (max-width: 1800px) {
      margin-top: 340px;
    }

    @media (max-width: 1750px) {
      margin-top: 310px;
    }

    @media (max-width: 1700px) {
      margin-top: 280px;
    }

    @media (max-width: 1650px) {
      margin-top: 240px;
    }

    @media (max-width: 1600px) {
      margin-top: 220px;
    }

    @media (max-width: 1550px) {
      margin-top: 200px;
    }

    @media (max-width: 1500px) {
      margin-top: 180px;
    }

    @media (max-width: 1450px) {
      margin-top: 140px;
    }

    @media (max-width: 1400px) {
      margin-top: 120px;
    }

    @media (max-width: 1350px) {
      margin-top: 110px;
    }

    @media (max-width: 1300px) {
      margin-top: 100px;
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
