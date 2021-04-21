<template>
  <v-footer dark padless>
    <v-col class="text-center" cols="12">
      <v-card-text>
        <v-btn
          v-for="social in socials"
          :key="social.name"
          class="mx-4 white--text"
          icon
          :href="social.link"
          target="_blank"
        >
          <v-icon size="36px">
            {{ social.icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Carmen Goetz</strong>
      </v-card-text>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",

  data: () => {
    return {
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
      socials: [
        {
          link: "https://www.instagram.com/creativereyne/",
          name: "Instagram",
          icon: "mdi-instagram"
        },
        {
          link: "https://twitter.com/CreativeReyne",
          name: "Twitter",
          icon: "mdi-twitter"
        },
        {
          link: "https://www.twitch.tv/creativereyne",
          name: "Twitch",
          icon: "mdi-twitch"
        },
        {
          link: "https://www.youtube.com/channel/UCyHVoqh4TK6XTRIi6m6d6UQ",
          name: "YouTube",
          icon: "mdi-youtube"
        }
      ]
    };
  }
};
</script>
