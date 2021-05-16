<template>
  <v-item-group>
    <v-btn
      v-for="button in buttons"
      :key="button.index"
      large
      outlined
      tile
      :to="{ name: button.to }"
      class="button white--text mt-16 py-6 mx-auto mx-lg-3"
      >{{ button.name }}</v-btn
    >
  </v-item-group>
</template>

<script>
export default {
  name: "Buttons",

  data: () => {
    return {
      buttons: [
        {
          name: "Build Your Brand",
          to: "Pricing"
        },
        {
          name: "Portfolio",
          to: "Portfolio"
        },
        {
          name: "Contact",
          to: "Contact"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.button {
  font-family: $Consolas, serif;
  font-size: 24px;
  border: 3px solid red;
  width: 272px;

  @media (max-width: $xl) {
    width: 190px;
    font-size: 16px;
  }
}
</style>
