<template>
  <v-footer padless dark class="footer">
    <v-col class="text-center" cols="12">
      <Socials class="pb-n8" />
      <v-card-text class="white--text pt-n8">
        {{ new Date().getFullYear() }} — <strong>Creative Reyne</strong>
      </v-card-text>
    </v-col>
  </v-footer>
</template>

<script>
import Socials from "./Socials.vue";

export default {
  name: "Footer",
  components: {
    Socials
  }
};
</script>

<style lang="scss" scoped>
@import "~vuetify/src/styles/styles.sass";

.footer {
  background-color: $creator-primary !important;
}
</style>
