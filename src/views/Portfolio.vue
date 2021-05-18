<template>
  <div class="portfolio my-16">
    <v-container>
      <v-row>
        <v-card-title class="portfolio__title white--text mx-auto"
          >make it stand out</v-card-title
        >
      </v-row>
      <v-row>
        <v-col v-for="col in columns" :key="col.index" col="3">
          <v-row
            ><v-img
              class="portfolio__image mx-auto"
              lazy-src=""
              max-width="300"
              :src="col.image"
            ></v-img
          ></v-row>
          <v-row>
            <v-card-title class="portfolio__subtitle mx-auto text-no-wrap">
              {{ col.title }}
            </v-card-title>
            <v-row>
              <p class="portfolio__description mx-16 mt-5 text-center">
                {{ col.description }}
              </p>
            </v-row>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <Button name="View Projects" to="Projects" />
        </v-col>
        <v-col cols="6">
          <v-row class="justify-end">
            <Button
              v-for="button in buttons"
              :key="button.index"
              :name="button.name"
              :to="button.to"
            />
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  name: "Portfolio",
  components: {
    Button
  },
  data: () => {
    return {
      columns: [
        {
          image: require("../assets/images/creators-logo-design2.png"),
          title: "Logo Design",
          description:
            "Your logo is the face of your brand. With a wide range of logo designs under my belt, I’m ready to bring your project to life with a tailored design based on your taste and my market research."
        },
        {
          image: require("../assets/images/creators-emotes.png"),
          title: "Emotes & Badges",
          description:
            "Whether you’re a streamer looking for cool emotes and badges for twitch, or a gaming community looking to spice up your discord, I’ve got you covered."
        },
        {
          image: require("../assets/images/creators-brand-packages.png"),
          title: "Brand Packages",
          description:
            "Branding is a little more than just a logo. It’s a color pallet, a recognizable theme, and most importantly it’s a uniform look across all your online platforms. Take pride in the project you’re starting with a branding package."
        },
        {
          image: require("../assets/images/creators-websites2.png"),
          title: "Website Design",
          description:
            "Website design can be expensive and extremely time consuming, even if you know what you’re doing. I can design and implement your new website with the some of the most competitive prices on the market."
        }
      ],
      buttons: [
        {
          name: "Pricing",
          to: "Pricing"
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

<style lang="scss" scoped>
.portfolio {
  &__title {
    font-family: $MADEEvolveSans, sans-serif !important;
    font-size: 88px;
    text-transform: uppercase;

    @media (max-width: $xl) {
      font-size: 72px;
    }

    @media (max-width: $lg) {
      font-size: 56px;
    }

    @media (max-width: $md) {
      font-size: 40px;
    }
  }

  &__subtitle {
    font-family: $MADEEvolveSansEVO, sans-serif !important;
    font-size: 36px;
    color: $creator-secondary;
    text-transform: uppercase;
  }

  &__description {
    font-family: $AcuminPro sans-serif;
    font-size: 20px;
    color: $text-white;
  }
}
</style>
