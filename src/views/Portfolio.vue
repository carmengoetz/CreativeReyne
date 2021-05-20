<template>
  <v-container class="portfolio py-16">
    <v-row>
      <v-card-title
        class="portfolio__title text-uppercase white--text mx-auto pb-12"
        :class="
          site == 'creators'
            ? 'portfolio__title--creators'
            : 'portfolio__title--standard'
        "
        >make it stand out</v-card-title
      >
    </v-row>
    <v-row>
      <v-col v-for="col in columns" :key="col.index" col="3">
        <v-row
          ><v-img
            class="portfolio__image mx-auto"
            :class="site == 'creators' ? '' : 'my-16'"
            :height="site == 'creators' ? '300' : '150'"
            max-width="300"
            :src="col.image"
          ></v-img
        ></v-row>
        <v-row>
          <v-card-title
            class="portfolio__subtitle text-uppercase mx-auto text-no-wrap"
            :class="
              site == 'creators'
                ? 'portfolio__subtitle--creators'
                : 'portfolio__subtitle--standard'
            "
          >
            {{ col.title }}
          </v-card-title>
          <v-row>
            <p
              class="portfolio__description mx-16 mt-5 text-center"
              :class="
                site == 'creators'
                  ? 'portfolio__description--creators'
                  : 'portfolio__description--standard'
              "
            >
              {{ col.description }}
            </p>
          </v-row>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="5" class="d-none d-md-flex"></v-col>
      <v-col cols="12" md="2">
        <v-row align="end" justify="center">
          <Button name="View Projects" to="Projects" page="brand" />
        </v-row>
      </v-col>
      <v-col cols="12" md="5">
        <v-row class="mt-1" justify="center" justify-lg="end">
          <Button
            v-for="button in buttons"
            :key="button.index"
            :name="button.name"
            :to="button.to"
            height="55"
            width="184"
            page="brand"
          />
        </v-row>
      </v-col>
    </v-row>
  </v-container>
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
      creatorsColumns: [
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
      standardColumns: [
        {
          image: require("@/assets/images/standard/standard-logo-design2.png"),
          title: "Logo Design",
          description:
            "Logo design is the face of your business. With a wide range of logo designs under my belt, I’m ready to bring your project to life with a tailored design based on your taste and my market research."
        },
        {
          image: require("@/assets/images/standard/standard-print-design3.png"),
          title: "Print Design",
          description:
            "Print is the core of most storefront companies. With experience not only in design, but also managing and working in print production, I can make sure that all your designs fit the medium."
        },
        {
          image: require("@/assets/images/standard/standard-brand-package2.png"),
          title: "Brand Packages",
          description:
            "Branding is a little more than just a logo. It’s a color pallet, a recognizable theme, and most importantly it’s a uniform look across all your ads and product lines. Take pride in the project you’re starting."
        },
        {
          image: require("@/assets/images/standard/standard-websites2.png"),
          title: "Website Design",
          description:
            "Website design can be expensive and extremely time consuming, even if you know what you’re doing. I can design and implement your new website with some of the most competitive prices on the market."
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
  computed: {
    columns: function() {
      return this.$store.state.site == "creators"
        ? this.creatorsColumns
        : this.standardColumns;
    },
    site() {
      return this.$store.state.site;
    }
  },
  created() {
    document.title = "Creative Reyne - Portfolio";
  }
};
</script>

<style lang="scss" scoped>
.portfolio {
  &__title {
    font-size: 88px;

    &--creators {
      font-family: $MADEEvolveSans !important;
    }

    &--standard {
      font-family: $BebasNeue !important;
      color: $text-black !important;
      letter-spacing: 0.24em;
    }

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
    font-size: 36px;

    &--creators {
      font-family: $MADEEvolveSansEVO !important;
      color: $creator-secondary;
    }

    &--standard {
      font-family: $BebasNeue !important;
      color: $text-black !important;
      letter-spacing: 0.24em;
    }
  }

  &__description {
    font-size: 20px;
    letter-spacing: 0.035em;

    &--creators {
      color: $text-white;
    }

    &--standard {
      color: $text-black;
    }
  }
}
</style>
