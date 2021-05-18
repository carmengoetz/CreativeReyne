<template>
  <div class="home">
    <v-container class="mt-lg-0 mt-xl-16">
      <v-row class="mt-16">
        <v-col cols="12" class="col-lg-5 mt-lg-0 mt-xl-16">
          <v-img
            class="home__image mt-lg-n10 mx-auto"
            max-width="600"
            src="@/assets/images/creators/creators-logo.png"
          ></v-img>
        </v-col>
        <v-col cols="12" class="col-lg-7 mt-lg-0 mt-xl-16">
          <v-row class="mt-lg-0 mt-xl-12">
            <v-card-title
              class="home__title white--text mt-16 mx-auto mx-lg-0 text-no-wrap"
              >Graphic Design</v-card-title
            >
          </v-row>
          <v-row class="mx-sm-auto">
            <v-card-subtitle
              class="home__subtitle white--text mt-10 mx-auto mx-lg-0 text-no-wrap"
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
import Button from "@/components/Button.vue";

export default {
  name: "Home",
  components: {
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
  },
  created() {
    document.title = "Creative Reyne";
  }
};
</script>

<style scoped lang="scss">
.home {
  &__title {
    font-family: $MADEEvolveSansEVO !important;
    font-size: 108px;
    @media (max-width: $xl) {
      font-size: 88px;
    }
  }

  &__subtitle {
    font-size: 40px;
    @media (max-width: $xl) {
      font-size: 32px;
    }
  }
}
</style>
