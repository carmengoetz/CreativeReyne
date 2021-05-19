<template>
  <div class="home">
    <v-container class="mb-16 mt-0 mt-xl-16">
      <v-row class="mt-16">
        <v-col cols="12" class="col-lg-5">
          <v-img
            v-if="site == 'creators'"
            class="home__image mt-lg-n10 mx-auto"
            max-height="584"
            width="600"
            src="@/assets/images/creators/creators-logo.png"
          ></v-img>
          <v-img
            v-else
            class="home__image mx-auto"
            max-height="488"
            width="500"
            src="@/assets/images/standard/standard-logo.png"
          ></v-img>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="12" class="col-lg-7">
          <v-row class="mt-lg-0 mt-xl-12">
            <v-card-title
              class="home__title white--text mt-16 mx-auto mx-lg-0 text-no-wrap"
              :class="
                site == 'creators'
                  ? 'home__title--creators'
                  : 'home__title--standard'
              "
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
  computed: {
    site() {
      return this.$store.state.site;
    }
  },
  created() {
    document.title = "Creative Reyne";
  }
};
</script>

<style scoped lang="scss">
.home {
  &__title {
    font-size: 108px;

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
  }

  &__subtitle {
    font-size: 40px;
    @media (max-width: $xl) {
      font-size: 32px;
    }
  }
}
</style>
