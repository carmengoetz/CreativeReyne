<template>
  <div class="home">
    <v-container class="mt-lg-0 mt-xl-16">
      <v-row class="mt-16">
        <v-col cols="12" class="col-lg-5 mt-lg-0 mt-xl-16">
          <Logo class="mt-lg-n10 mx-sm-auto" />
        </v-col>
        <v-col cols="12" class="col-lg-7 mt-lg-0 mt-xl-16">
          <v-row class="mt-lg-0 mt-xl-12">
            <v-card-title class="home__title white--text mt-16 mx-auto mx-lg-0"
              >Graphic Design</v-card-title
            >
          </v-row>
          <v-row class="mx-sm-auto">
            <v-card-subtitle
              class="home__subtitle white--text flex-wrap mt-10 mx-auto mx-lg-0"
              >For content creators and gaming communities</v-card-subtitle
            >
          </v-row>
          <v-row class="mt-16 mx-sm-auto">
            <div class="mx-auto mx-lg-0">
              <Button
                v-for="button in buttons"
                :key="button.index"
                :name="button.name"
                :to="button.to"
              />
            </div>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Logo from "@/components/Logo.vue";
import Button from "@/components/Button.vue";

export default {
  name: "Home",
  components: {
    Logo,
    Button
  },
  data: () => {
    return {
      buttons: [
        {
          name: "Build Your Brand",
          to: "Brand"
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
  }
};
</script>

<style scoped lang="scss">
.home {
  &__title {
    font-family: $MADEEvolveSansEVO, sans-serif !important;
    font-size: 110px;

    @media (max-width: $xl) {
      font-size: 70px;
    }

    @media (max-width: $lg) {
      font-size: 60px;
    }

    @media (max-width: $md) {
      font-size: 50px;
    }
  }

  &__subtitle {
    font-family: $AcuminPro, sans-serif !important;
    font-size: 40px;
    @media (max-width: $xl) {
      font-size: 30px;
    }
  }

  &__button {
    font-family: $Consolas, serif;
    font-size: 24px;
    border: 3px solid red;
    width: 272px;
    margin-left: 20px;

    @media (max-width: $xl) {
      width: 190px;
      font-size: 16px;
    }
  }
}
</style>
