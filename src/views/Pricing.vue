<template>
  <v-container class="pricing my-8 my-md-16">
    <v-row no-gutters>
      <v-card-title
        class="pricing__title text-uppercase white--text mx-auto"
        :class="
          site == 'creators'
            ? 'pricing__title--creators mb-4 mb-md-8'
            : 'pricing__title--standard  mb-8 mb-md-16'
        "
        >{{ title }}</v-card-title
      >
    </v-row>
    <v-row
      no-gutters
      justify="center"
      class="ml-4 mr-n4 ml-sm-16 mr-sm-n16 ml-md-16 mr-md-n16"
    >
      <v-col
        v-for="col in columns"
        :key="col.index"
        cols="12"
        md="6"
        xl="3"
        class="ml-0 mr-0 ml-sm-16 mr-sm-n16 ml-md-0 mr-md-0"
      >
        <v-row
          no-gutters
          justify="start"
          class="ml-0 mr-0 ml-lg-16 mr-lg-n16 ml-xl-0 mr-xl-0"
        >
          <v-img
            class="pricing__image"
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
        <v-row
          no-gutters
          justify="start"
          class="ml-0 mr-0 ml-lg-16 mr-lg-n16 ml-xl-0 mr-xl-0"
        >
          <v-card-title
            class="pricing__subtitle text-uppercase text-no-wrap my-2 ml-n4"
            :class="
              site == 'creators'
                ? 'pricing__subtitle--creators mt-3'
                : 'pricing__subtitle--standard mt-3'
            "
          >
            {{ col.title }}
          </v-card-title>
        </v-row>
        <div v-for="item in col.items" :key="item.index">
          <v-row
            no-gutters
            justify="start"
            class="ml-0 mr-0 ml-lg-16 mr-lg-n16 ml-xl-0 mr-xl-0"
          >
            <v-col cols="4" sm="3" md="4" lg="3" xl="5">
              <p
                class="pricing__item"
                :class="
                  site == 'creators'
                    ? 'pricing__item--creators'
                    : 'pricing__item--standard'
                "
              >
                {{ item.item }}:
              </p>
            </v-col>
            <v-col cols="8" sm="9" md="8" lg="9" xl="7">
              <p
                v-for="price in item.prices"
                :key="price.index"
                class="pricing__price"
              >
                {{ price }}
              </p>
            </v-col>
          </v-row>
          <v-row
            no-gutters
            class="ml-0 mr-0 ml-lg-16 mr-lg-n16 ml-xl-0 mr-xl-0"
          >
            <p class="pricing__note mt-n4">{{ item.note }}</p>
          </v-row>
          <v-row
            no-gutters
            class="ml-0 mr-0 ml-lg-16 mr-lg-n16 ml-xl-0 mr-xl-0"
          >
            <ul class="pricing__list ml-2 mt-n4">
              <li v-for="list in item.list" :key="list.index">
                {{ list }}
              </li>
            </ul>
          </v-row>
        </div>
      </v-col>
    </v-row>

    <v-row no-gutters justify="center" justify-md="end">
      <Button
        v-for="button in buttons"
        :key="button.index"
        :name="button.name"
        :to="button.to"
      />
    </v-row>
  </v-container>
</template>

<script>
import Button from "@/components/Button.vue";
import { pricing } from "@/constants";

export default {
  name: "Pricing",
  components: {
    Button
  },
  data: () => {
    return {
      title: pricing.title,
      creatorsColumns: pricing.creatorsColumns,
      standardColumns: pricing.standardColumns,
      buttons: [
        {
          name: "Portfolio",
          to: "Portfolio"
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
.pricing {
  &__title {
    font-size: 88px;

    &--creators {
      font-family: $MADEEvolveSans !important;
    }

    &--standard {
      font-family: $BebasNeue !important;
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
    color: white;

    &--creators {
      font-family: $MADEEvolveSansEVO !important;
    }

    &--standard {
      font-family: $BebasNeue !important;
      letter-spacing: 0.24em;
    }

    @media (max-width: $xl) {
      font-size: 28px;
    }
  }

  &__item {
    font-size: 20px;
    font-weight: 700;

    &--creators {
      color: $creator-secondary;
    }

    &--standard {
      color: $text-black;
    }

    @media (max-width: $xl) {
      font-size: 16px;
    }
  }

  &__price {
    font-size: 20px;
    color: $text-white;

    @media (max-width: $xl) {
      font-size: 16px;
    }
  }

  &__note {
    font-size: 20px;
    color: $text-white;
    font-style: italic;

    @media (max-width: $xl) {
      font-size: 16px;
    }
  }

  &__list {
    color: white;
  }
}
</style>
