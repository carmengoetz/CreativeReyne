<template>
  <div class="home">
    <ParticlesJS>
      <v-container class="home__content">
        <v-row>
          <v-col cols="2" sm="4" md="5">
            <Logo />
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="9" sm="7" md="6" lg="7">
            <v-row>
              <v-card-title
                class="home__title white--text text-md-h2 text-h3 mt-0 mt-md-8"
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
    </ParticlesJS>
  </div>
</template>

<script>
import ParticlesJS from "@/components/ParticlesJS.vue";
import Logo from "@/components/Logo.vue";

export default {
  name: "Home",
  components: {
    ParticlesJS,
    Logo
  }
};
</script>

<style scoped lang="scss">
.home {
  &__content {
    position: absolute;
    display: block;
    margin: 100px 11%;
  }

  &__title {
    font-family: "Montserrat", sans-serif !important;
    letter-spacing: -0.1em !important;
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
