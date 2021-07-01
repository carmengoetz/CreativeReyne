<template>
  <v-container class="home mt-8 mt-md-16">
    <CreatorsHome v-if="site == 'creators'" />
    <StandardHome v-else />
  </v-container>
</template>

<script>
import CreatorsHome from "@/components/CreatorsHome.vue";
import StandardHome from "@/components/StandardHome.vue";

export default {
  name: "Home",
  components: {
    CreatorsHome,
    StandardHome
  },
  computed: {
    site() {
      return this.$store.state.site;
    }
  }
};
</script>

<style scoped lang="scss">
.home {
  &__title {
    font-size: 108px;
    word-break: normal !important;

    @media (max-width: $xl) {
      font-size: 88px;
    }
    @media (max-width: $md) {
      line-height: 3rem;
    }
    @media (max-width: $sm) {
      font-size: 60px;
    }
  }

  &__subtitle {
    font-size: 40px;
    word-break: normal !important;

    @media (max-width: $xl) {
      font-size: 32px;
    }

    @media (max-width: $xl) {
      line-height: 2rem;
    }
  }
}
</style>
