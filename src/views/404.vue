<template>
  <v-container class="four-oh-four mt-n8 mt-xl-16 pb-0">
    <v-row no-gutters>
      <v-col cols="12" md="5">
        <v-row no-gutters>
          <v-img
            class="four-oh-four__image mx-auto mt-16"
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
        </v-row>
        <v-row no-gutters justify="center">
          <v-btn
            large
            outlined
            tile
            :to="{ name: 'Landing' }"
            class="four-oh-four__button white--text mt-8 mt-xl-16 py-6 mx-3"
            height="75"
            width="272"
          >
            Home</v-btn
          >
        </v-row>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12" md="5">
        <v-row no-gutters>
          <v-card-title
            class="four-oh-four__title mx-auto text-uppercase text-center px-0"
          >
            Error 404. page does not exists!</v-card-title
          >
        </v-row>
        <v-row no-gutters>
          <v-img
            class="four-oh-four__pika mx-auto mb-n16"
            width="650"
            src="@/assets/images/404-pika.png"
            lazy-src="@/assets/images/404-pika-low.png"
            ><template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row> </template
          ></v-img>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { landing } from "@/constants";

export default {
  name: "404",
  components: {},
  data: () => {
    return {
      creatorsLogo: landing.creatorsLogo,
      creatorsLogoLazy: landing.creatorsLogoLazy
    };
  },
  computed: {
    site() {
      return this.$store.state.site;
    }
  },
  created() {
    document.title = "Creative Reyne - 404";
  }
};
</script>

<style scoped lang="scss">
.four-oh-four {
  &__title {
    font-size: 64px;
    word-break: normal !important;
    font-family: $BebasNeue !important;
    color: $text-white;

    margin-top: 300px;

    @media (max-width: $xl) {
      font-size: 52px;
      line-height: 3rem;
      margin-top: 160px;
    }
    @media (max-width: $md) {
      font-size: 40px;
      line-height: 2rem;
    }
  }

  //   &__pika {
  //     position: absolute;
  //     top: 710px;
  //   }

  &__button {
    font-family: $Consolas;
    font-size: 24px;
    border: 6px solid $creator-secondary !important;
    opacity: unset !important;

    @media (max-width: $xl) {
      width: 190px !important;
      font-size: 16px;
    }

    @media (max-width: $sm) {
      width: 100% !important;
    }
  }
}
</style>
