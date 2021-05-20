<template>
  <v-container class="projects">
    <v-row>
      <v-img
        v-for="image in images"
        :key="image.index"
        class="portfolio__image mx-auto mt-16"
        height="400"
        :max-width="site == 'creators' ? '460' : '820'"
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
</template>

<script>
import Button from "@/components/Button.vue";
import { projects } from "@/constants";

export default {
  name: "Portfolio",
  components: {
    Button
  },
  data: () => {
    return {
      projects: projects,
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
  computed: {
    images: function() {
      return this.$store.state.site == "creators"
        ? this.projects.creatorsImages
        : this.projects.standardImages;
    },
    site() {
      return this.$store.state.site;
    }
  },
  created() {
    document.title = "Creative Reyne - Projects";
  }
};
</script>
