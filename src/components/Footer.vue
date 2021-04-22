<template>
  <v-footer dark padless>
    <v-col class="text-center" cols="12">
      <Socials />
      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Carmen Goetz</strong>
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
