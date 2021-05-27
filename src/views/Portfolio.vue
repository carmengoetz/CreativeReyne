<template>
  <v-container class="portfolio my-8 my-md-16">
    <v-row no-gutters>
      <v-card-title
        class="portfolio__title text-uppercase white--text mx-auto text-center"
        :class="
          site == 'creators'
            ? 'portfolio__title--creators mb-4 mb-md-8'
            : 'portfolio__title--standard mb-0 mb-md-4'
        "
        >{{ title }}</v-card-title
      >
    </v-row>
    <v-row no-gutters>
      <v-col v-for="col in columns" :key="col.index" col="3">
        <v-row no-gutters
          ><v-img
            class="portfolio__image mx-auto"
            :class="site == 'creators' ? '' : 'my-8 my-md-16'"
            :height="site == 'creators' ? '300' : '150'"
            max-width="300"
            :src="col.image"
            :lazy-src="col.imageLazy"
            ><template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row> </template></v-img
        ></v-row>
        <v-row no-gutters>
          <v-card-title
            class="portfolio__subtitle text-uppercase mx-auto text-no-wrap mb-2"
            :class="
              site == 'creators'
                ? 'portfolio__subtitle--creators'
                : 'portfolio__subtitle--standard'
            "
          >
            {{ col.title }}
          </v-card-title>
          <v-row no-gutters>
            <p
              class="portfolio__description mx-4 mx-sm-16 text-center"
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
    <v-row no-gutters>
      <v-col cols="5" class="d-none d-md-flex"></v-col>
      <v-col cols="12" lg="2">
        <v-row no-gutters align="end" justify="center">
          <Button name="View Projects" to="Projects" page="brand" />
        </v-row>
      </v-col>
      <v-col cols="12" lg="5">
        <v-row no-gutters class="mt-1" justify="center" justify-lg="end">
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
import { portfolio } from "@/constants";

export default {
  name: "Portfolio",
  components: {
    Button
  },
  data: () => {
    return {
      title: portfolio.title,
      creatorsColumns: portfolio.creatorsColumns,
      standardColumns: portfolio.standardColumns,
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
  }
};
</script>

<style lang="scss" scoped>
.portfolio {
  &__title {
    font-size: 88px;
    word-break: normal !important;

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
