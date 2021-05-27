<template>
  <div>
    <v-container class="brand my-8 my-md-16">
      <v-row no-gutters>
        <v-card-title
          class="brand__title text-uppercase white--text mx-auto text-center"
          :class="
            site == 'creators'
              ? 'brand__title--creators mb-4 mb-md-8'
              : 'brand__title--standard mb-8 mb-md-16'
          "
          >{{ title }}</v-card-title
        >
      </v-row>
      <v-row no-gutters>
        <v-col v-for="col in columns" :key="col.index" col="4">
          <v-row no-gutters
            ><v-img
              class="brand__image mx-auto hidden-sm-and-down"
              contain
              max-width="400"
              :src="col.image"
              :lazy-src="col.imageLazy"
              ><template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row> </template
            ></v-img>
            <v-img
              class="brand__image mx-auto hidden-md-and-up"
              contain
              max-width="300"
              :src="col.image"
              :lazy-src="col.imageLazy"
              ><template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row> </template
            ></v-img>
          </v-row>
          <v-row no-gutters>
            <v-card-title
              class="brand__subtitle text-uppercase mx-auto text-no-wrap my-2"
              :class="
                site == 'creators'
                  ? 'brand__subtitle--creators'
                  : 'brand__subtitle--standard'
              "
            >
              {{ col.title }}
            </v-card-title>
            <v-row no-gutters>
              <p
                class="brand__description mx-4 mx-sm-16 text-center"
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
      <v-row no-gutters justify="center">
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
  data: () => {
    return {
      title: brand.title,
      creatorsColumns: brand.creatorsColumns,
      standardColumns: brand.standardColumns,
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
.brand {
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
