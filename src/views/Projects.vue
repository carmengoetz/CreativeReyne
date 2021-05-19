<template>
  <div class="portfolio">
    <v-container>
      <v-row>
        <v-img
          v-for="image in images"
          :key="image.index"
          class="portfolio__image mx-auto"
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
        require("@/assets/images/creators/creators-logo-design1.png"),
        require("@/assets/images/creators/creators-logo-design2.png"),
        require("@/assets/images/creators/creators-logo-design3.png"),
        require("@/assets/images/creators/creators-websites1.png"),
        require("@/assets/images/creators/creators-websites2.png"),
        require("@/assets/images/creators/creators-websites3.png"),
        require("@/assets/images/creators/creators-badges1.png"),
        require("@/assets/images/creators/creators-badges2.png"),
        require("@/assets/images/creators/creators-emotes.png"),
        require("@/assets/images/creators/creators-brand-packages.png")
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
  },
  created() {
    document.title = "Creative Reyne - Projects";
  }
};
</script>
