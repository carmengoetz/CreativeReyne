<template>
  <v-btn
    large
    outlined
    tile
    :to="{ name: to }"
    class="button white--text mt-16 py-6 mx-3"
    >{{ name }}</v-btn
  >
</template>

<script>
export default {
  name: "Button",
  props: ["name", "to"]
};
</script>

<style scoped lang="scss">
.button {
  font-family: $Consolas, serif;
  font-size: 24px;
  border: 6px solid $creator-secondary;
  width: 272px;

  @media (max-width: $xl) {
    width: 190px;
    font-size: 16px;
  }
}
</style>
