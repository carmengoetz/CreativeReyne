<template>
  <v-btn
    large
    outlined
    tile
    :to="{ name: to }"
    class="button white--text mt-8 mt-lg-16 py-6 mx-3"
    :height="height ? height : 75"
    :width="width ? width : 272"
    :class="site == 'creators' ? 'button__creators' : 'button__standard--white'"
  >
    {{ name }}</v-btn
  >
</template>

<script>
export default {
  name: "Button",
  props: ["name", "to", "page", "width", "height"],
  computed: {
    site() {
      return this.$store.state.site;
    }
  }
};
</script>

<style scoped lang="scss">
.button {
  font-family: $Consolas;
  font-size: 24px;
  border: 6px solid $creator-secondary;

  @media (max-width: $xl) {
    width: 190px !important;
    font-size: 16px;
  }

  @media (max-width: $sm) {
    width: 100% !important;
  }

  &__creators {
    border: 6px solid $creator-secondary;
  }

  &__standard {
    &--white {
      border: 6px solid $text-white;
      color: $text-black !important;
    }
  }
}
</style>
