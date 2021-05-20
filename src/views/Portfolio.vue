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
        >{{ title }}</v-card-title
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
