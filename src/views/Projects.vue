<template>
  <v-container class="projects my-8 my-md-16">
    <v-row>
      <v-dialog
        v-for="image in images"
        :key="image.index"
        v-model="dialog[image.index]"
        transition="fade-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <!-- <v-hover v-slot="{ hover }">
            <v-card :elevation="hover ? 16 : 0"> -->
          <v-img
            class="projects__image mx-auto mt-16 hidden-md-and-down"
            :max-height="site == 'creators' ? '' : '400'"
            :max-width="site == 'creators' ? '450' : '820'"
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
          <v-img
            class="projects__image mx-auto mt-16 hidden-lg-and-up"
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
          <!-- </v-card>
          </v-hover> -->
        </template>
        <v-card color="rgba(0, 0, 0, 0.5)" class="py-13">
          <!-- <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="white"
              fab
              text
              @click="
                dialog[image.index] = false;
                return;
              "
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-actions> -->
          <v-img
            class="mx-auto"
            :max-height="site == 'creators' ? '' : '1000'"
            max-width="1200"
            :src="image.image"
            :lazy-src="image.imageLazy"
            ><template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row> </template
          ></v-img>
        </v-card>
      </v-dialog>
    </v-row>

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
      ]
    };
  },
  computed: {
    images: function() {
      return this.$store.state.site == "creators"
        ? this.projects.creatorsImages
        : this.projects.standardImages;
    },
    dialog: function() {
      return this.images.map(() => false);
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
