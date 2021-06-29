<template>
  <v-container class="projects my-8 my-md-16">
    <v-row>
      <v-dialog
        v-for="image in images"
        :key="image.index"
        v-model="dialog[image.index]"
        transition="fade-transition"
        max-width="1400"
        content-class="elevation-0"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-img
            class="projects__image mx-auto mb-16 d-none d-xl-flex"
            height="400"
            max-width="820"
            :src="image.image"
            :lazy-src="image.imageLazy"
            v-bind="attrs"
            v-on="on"
            @click="carouselIndex = image.index"
            ><template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row> </template
          ></v-img>
          <v-img
            class="projects__image mx-auto mb-16 d-none d-lg-flex d-xl-none"
            max-height="400"
            max-width="500"
            :src="image.image"
            :lazy-src="image.imageLazy"
            v-bind="attrs"
            v-on="on"
            @click="carouselIndex = image.index"
            ><template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row> </template
          ></v-img>
          <v-img
            class="projects__image mx-auto mb-16 d-lg-none"
            max-height="400"
            max-width="300"
            :src="image.image"
            :lazy-src="image.imageLazy"
            v-bind="attrs"
            v-on="on"
            ><template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row> </template
          ></v-img>
        </template>

        <v-card color="transparent" flat elevation="0">
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="white"
              fab
              text
              @click="$set(dialog, image.index, false)"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-actions>
          <v-carousel hide-delimiters v-model="carouselIndex" height="auto">
            <v-carousel-item v-for="item in images" :key="item.index">
              <v-img
                max-width="1200"
                :src="item.image"
                :lazy-src="item.imageLazy"
                class="mx-auto"
                ><template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row> </template
              ></v-img>
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </v-dialog>
    </v-row>

    <v-row no-gutters>
      <!-- <v-col cols="12" sm="6">
        <v-row no-gutters justify="center" justify-sm="start">
          <Button name="Back" to="Portfolio" />
        </v-row>
      </v-col> -->
      <v-col>
        <v-row no-gutters justify="center" justify-sm="end">
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
  name: "Projects",
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
      ],
      dialog: [],
      carouselIndex: 0
    };
  },
  computed: {
    images: function() {
      return this.$store.state.site == "creators"
        ? this.projects.creatorsImages
        : this.projects.standardImages;
    },
    dialogs() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return (this.dialog = this.images.map(() => false));
    },
    site() {
      return this.$store.state.site;
    }
  }
};
</script>

<style lang="scss" scoped>
.projects {
  &__image:hover {
    cursor: pointer;
  }
}
</style>
