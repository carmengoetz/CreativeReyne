<template>
  <v-footer
    padless
    class="footer pt-3"
    :class="site == 'creators' ? 'footer__creators' : 'footer__standard'"
  >
    <v-col class="text-center" cols="12">
      <Socials :site="site" />
      <v-card-text :class="site == 'creators' ? 'white--text' : 'black--text'">
        {{ new Date().getFullYear() }} — <strong>Creative Reyne</strong>
      </v-card-text>
    </v-col>
  </v-footer>
</template>

<script>
import Socials from "./Socials.vue";

export default {
  name: "Footer",
  props: ["site"],
  components: {
    Socials
  }
};
</script>

<style lang="scss" scoped>
@import "~vuetify/src/styles/styles.sass";

.footer {
  &__creators {
    background-color: $creator-primary !important;
  }

  &__standard {
    background-color: white !important;
  }
}
</style>
