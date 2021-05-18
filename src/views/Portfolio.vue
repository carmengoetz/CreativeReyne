<template>
  <div class="portfolio my-16">
    <v-container>
      <v-row>
        <v-card-title
          class="portfolio__title text-uppercase white--text mx-auto"
          >make it stand out</v-card-title
        >
      </v-row>
      <v-row>
        <v-col v-for="col in columns" :key="col.index" col="3">
          <v-row
            ><v-img
              class="portfolio__image mx-auto"
              max-width="300"
              :src="col.image"
            ></v-img
          ></v-row>
          <v-row>
            <v-card-title
              class="portfolio__subtitle text-uppercase mx-auto text-no-wrap"
            >
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
          image: require("@/assets/images/creators/creators-logo-design2.png"),
          title: "Logo Design",
          description:
            "Your logo is the face of your brand. With a wide range of logo designs under my belt, I’m ready to bring your project to life with a tailored design based on your taste and my market research."
        },
        {
          image: require("@/assets/images/creators/creators-emotes.png"),
          title: "Emotes & Badges",
          description:
            "Whether you’re a streamer looking for cool emotes and badges for twitch, or a gaming community looking to spice up your discord, I’ve got you covered."
        },
        {
          image: require("@/assets/images/creators/creators-brand-packages.png"),
          title: "Brand Packages",
          description:
            "Branding is a little more than just a logo. It’s a color pallet, a recognizable theme, and most importantly it’s a uniform look across all your online platforms. Take pride in the project you’re starting with a branding package."
        },
        {
          image: require("@/assets/images/creators/creators-websites2.png"),
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
  },
  created() {
    document.title = "Creative Reyne - Portfolio";
  }
};
</script>

<style lang="scss" scoped>
.portfolio {
  &__title {
    font-family: $MADEEvolveSans !important;
    font-size: 88px;

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
    font-family: $MADEEvolveSansEVO !important;
    font-size: 36px;
    color: $creator-secondary;
  }

  &__description {
    font-size: 20px;
    color: $text-white;
  }
}
</style>
