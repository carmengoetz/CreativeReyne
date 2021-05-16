<template>
  <div class="home">
    <v-container class="mt-16">
      <v-row>
        <v-col cols="6">
          <Logo />
        </v-col>
        <v-col cols="6" class="mt-16">
          <v-row>
            <v-card-title class="home__title white--text text-h1 mt-16"
              >Graphic Design</v-card-title
            >
          </v-row>
          <v-row>
            <v-card-subtitle
              class="home__subtitle white--text flex-wrap text-md-h5 text-subtitle-1"
              >For content creators and gaming communities</v-card-subtitle
            >
          </v-row>
          <v-row>
            <v-btn large outlined tile class="home__button white--text"
              >Build Your Brand</v-btn
            >
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Logo from "@/components/Logo.vue";

export default {
  name: "Home",
  components: {
    Logo
  }
};
</script>

<style scoped lang="scss">
.home {
  &__title {
    font-family: "MADEEvolveSansRegularEVO", sans-serif !important;
  }

  &__subtitle {
    font-family: "Montserrat", sans-serif;
    font-size: 24px;
  }

  &__button {
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
    text-transform: capitalize;

    margin: 10% 20px;
    border: 3px solid red;
    letter-spacing: -2px;
  }
}
</style>
