<template>
  <div class="portfolio my-16">
    <v-container>
      <v-row>
        <v-img
          v-for="image in images"
          :key="image.index"
          class="portfolio__image mx-auto"
          lazy-src=""
          max-width="460"
          :src="image"
        ></v-img
      ></v-row>

      <v-row class="justify-end">
        <v-col cols="6">
          <Button name="Back" to="Portfolio" />
        </v-col>
        <v-col cols="6">
          <v-row class="justify-end">
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
  </div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  name: "Portfolio",
  components: {
    Button
  },
  data: () => {
    return {
      images: [
        require("../assets/images/creators-logo-design1.png"),
        require("../assets/images/creators-logo-design2.png"),
        require("../assets/images/creators-logo-design3.png"),
        require("../assets/images/creators-websites1.png"),
        require("../assets/images/creators-websites2.png"),
        require("../assets/images/creators-websites3.png"),
        require("../assets/images/creators-badges1.png"),
        require("../assets/images/creators-badges2.png"),
        require("../assets/images/creators-emotes.png"),
        require("../assets/images/creators-brand-packages.png")
      ],
      buttons: [
        {
          name: "Pricing",
          to: "Pricing"
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

<style lang="scss" scoped>
.portfolio {
  &__title {
    font-family: $MADEEvolveSans, sans-serif !important;
    font-size: 88px;
    text-transform: uppercase;

    @media (max-width: $xl) {
      font-size: 72px;
    }

    @media (max-width: $lg) {
      font-size: 56px;
    }

    @media (max-width: $md) {
      font-size: 40px;
    }
  }

  &__subtitle {
    font-family: $MADEEvolveSansEVO, sans-serif !important;
    font-size: 40px;
    color: $creator-secondary;
    text-transform: uppercase;
  }

  &__description {
    font-family: $AcuminPro sans-serif;
    font-size: 20px;
    color: $text-white;
  }
}
</style>
