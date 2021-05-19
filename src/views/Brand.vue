<template>
  <div
    class="brand pt-16"
    :class="site == 'creators' ? 'brand__creators' : 'brand__standard'"
  >
    <v-container>
      <v-row>
        <v-card-title
          class="brand__title text-uppercase white--text mx-auto mb-12"
          :class="
            site == 'creators'
              ? 'brand__title--creators'
              : 'brand__title--standard'
          "
          >why choose creative reyne?</v-card-title
        >
      </v-row>
      <v-row>
        <v-col
          v-for="col in columns"
          :key="col.index"
          col="4"
          class="mx-6 mb-4"
        >
          <v-row
            ><v-img
              class="brand__image mx-auto"
              max-width="400"
              :src="site == 'creators' ? col.imageCreators : col.imageStandard"
            ></v-img
          ></v-row>
          <v-row>
            <v-card-title
              class="brand__subtitle text-uppercase mx-auto text-no-wrap"
              :class="
                site == 'creators'
                  ? 'brand__subtitle--creators'
                  : 'brand__subtitle--standard'
              "
            >
              {{ col.title }}
            </v-card-title>
            <v-row>
              <p
                class="brand__description mx-16 mt-5 text-center"
                :class="
                  site == 'creators'
                    ? 'brand__description--creators'
                    : 'brand__description--standard'
                "
              >
                {{ col.description }}
              </p>
            </v-row>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <div class="mx-auto">
          <Button
            v-for="button in buttons"
            :key="button.index"
            :name="button.name"
            :to="button.to"
            page="brand"
          />
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  name: "Brand",
  components: {
    Button
  },
  computed: {
    site() {
      return this.$store.state.site;
    }
  },
  data: () => {
    return {
      columns: [
        {
          imageCreators: require("@/assets/images/creators/creators-logo.png"),
          imageStandard: require("@/assets/images/standard/standard-print-design1.png"),
          title: "Experience",
          description:
            "With over 10 years of experience in graphic design and printing, you can rest knowing I will find a solution that works for you and your platform"
        },
        {
          imageCreators: require("@/assets/images/creators/creators-emotes.png"),
          imageStandard: require("@/assets/images/standard/standard-shirt.png"),
          title: "Tailored Process",
          description:
            "It all begins with an idea. Maybe you want to launch a new stream. Maybe you want to turn your youtube channel into something more. Or maybe you have a podcast to share with the world. Whatever it is, I will make sure you don’t go unnoticed"
        },
        {
          imageCreators: require("@/assets/images/creators/creators-websites1.png"),
          imageStandard: require("@/assets/images/standard/standard-print-design2.png"),
          title: "Industry Insider",
          description:
            "10 years of experience doesn’t just mean I know what to do, but also who to talk to. From the best local printers to the coolest product vendors, we know them all and can work with them to make sure your project is the best it can be."
        }
      ],
      buttons: [
        {
          name: "Portfolio",
          to: "Portfolio"
        },
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
    document.title = "Creative Reyne - Build Your Brand";
  }
};
</script>

<style lang="scss" scoped>
.brand {
  &__standard {
    background: $standard-secondary;
    padding-bottom: 200px;
  }

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
      font-size: 52px;
    }

    @media (max-width: $md) {
      font-size: 40px;
    }
  }

  &__subtitle {
    font-size: 40px;

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
    color: $text-white;
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
