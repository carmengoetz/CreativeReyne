<template>
  <div class="home">
    <ParticlesJS>
      <v-container class="home__content">
        <v-row justify="space-around">
          <v-col cols="5">
            <v-img
              class="home__image"
              lazy-src=""
              max-width="400"
              src="../assets/creative-reyne-thumb.gif"
            ></v-img>
          </v-col>
          <v-col cols="7">
            <v-row>
              <v-card-title class="home__title white--text"
                >Graphic Design</v-card-title
              >
            </v-row>
            <v-row>
              <v-card-subtitle class="home__subtitle white--text"
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
    </ParticlesJS>
  </div>
</template>

<script>
import ParticlesJS from "@/components/ParticlesJS.vue";

export default {
  name: "Home",
  components: {
    ParticlesJS
  }
};
</script>

<style scoped lang="scss">
.home {
  &__content {
    position: absolute;
    display: block;
    top: 25%;
    left: 10%;
  }

  &__title {
    font-family: "Montserrat", sans-serif;
    font-size: 80px;
    letter-spacing: -8px;
    margin-top: 10%;
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
