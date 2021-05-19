<template>
  <v-row justify="center">
    <v-btn
      v-for="social in socials"
      :key="social.name"
      class="mr-2"
      :class="className"
      :color="site == 'creators' ? 'white' : 'black'"
      icon
      :href="social.link"
      target="_blank"
    >
      <v-icon :size="size">
        {{ social.icon }}
      </v-icon>
    </v-btn>
  </v-row>
</template>

<script>
export default {
  name: "Socials",
  props: ["site", "size", "className"],
  data: () => {
    return {
      socials: [
        {
          link: "https://www.twitch.tv/creativereyne",
          name: "Twitch",
          icon: "mdi-twitch"
        },
        {
          link: "https://www.youtube.com/channel/UCyHVoqh4TK6XTRIi6m6d6UQ",
          name: "YouTube",
          icon: "mdi-youtube"
        },
        {
          link: "https://www.instagram.com/creativereyne/",
          name: "Instagram",
          icon: "mdi-instagram"
        },
        {
          link: "https://twitter.com/CreativeReyne",
          name: "Twitter",
          icon: "mdi-twitter"
        }
      ]
    };
  }
};
</script>
