<template>
  <v-btn
    large
    outlined
    tile
    :to="{ name: to }"
    class="button white--text mt-16 py-6 mx-3"
    :class="site == 'creators' ? 'button__creators' : 'button__standard'"
    >{{ name }}</v-btn
  >
</template>

<script>
export default {
  name: "Button",
  props: ["name", "to"],
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
  width: 272px;

  @media (max-width: $xl) {
    width: 190px;
    font-size: 16px;
  }

  &__creators {
    border: 6px solid $creator-secondary;
  }

  &__standard {
    border: 6px solid $text-black;
  }
}
</style>
