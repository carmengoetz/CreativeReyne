<template>
  <v-img :class="className" lazy-src="" :max-width="width" :src="src"></v-img>
</template>

<script>
export default {
  name: "Image",
  props: ["width", "src", "className"]
};
</script>
