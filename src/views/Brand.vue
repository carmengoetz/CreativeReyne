<template>
  <div>
    <v-container class="brand py-16">
      <v-row>
        <v-card-title
          class="brand__title text-uppercase white--text mx-auto pb-16"
          :class="
            site == 'creators'
              ? 'brand__title--creators'
              : 'brand__title--standard'
          "
          >{{ title }}</v-card-title
        >
      </v-row>
      <v-row class="pt-0 pt-md-10">
        <v-col
          v-for="col in columns"
          :key="col.index"
          col="4"
          class="mx-6 mb-4"
        >
          <v-row
            ><v-img
              class="brand__image mx-auto"
              contain
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
      <v-row justify="center">
        <Button
          v-for="button in buttons"
          :key="button.index"
          :name="button.name"
          :to="button.to"
          page="brand"
        />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import { brand } from "@/constants";

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
      title: brand.title,
      columns: brand.columns,
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
