<template>
  <v-container class="pricing py-16">
    <v-row>
      <v-card-title
        class="pricing__title text-uppercase white--text mx-auto pb-12"
        :class="
          site == 'creators'
            ? 'pricing__title--creators'
            : 'pricing__title--standard'
        "
        >{{ title }}</v-card-title
      >
    </v-row>
    <v-row>
      <v-col
        v-for="col in columns"
        :key="col.index"
        cols="12"
        md="6"
        lg="3"
        class="mb-4 ml-0 mr-0 ml-md-16 mr-md-n16 ml-lg-0 mr-lg-0 ml-xl-8 mr-xl-n8"
      >
        <v-row justify="center" justify-md="start">
          <v-img
            class="pricing__image mx-4"
            max-width="300"
            :src="col.image"
          ></v-img
        ></v-row>
        <v-row justify="center" justify-md="start">
          <v-card-title
            class="pricing__subtitle text-uppercase text-no-wrap mb-10"
            :class="
              site == 'creators'
                ? 'pricing__subtitle--creators'
                : 'pricing__subtitle--standard'
            "
          >
            {{ col.title }}
          </v-card-title>
        </v-row>
        <div v-for="item in col.items" :key="item.index">
          <v-row justify="center" justify-md="start" class="pl-0 pl-md-4">
            <v-col cols="1" sm="2" md="0" class="d-flex d-md-none"></v-col>
            <v-col cols="5" md="6" xl="5">
              <v-row>
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
              </v-row>
            </v-col>
            <v-col cols="6" sm="5" md="6" xl="7">
              <v-row
                justify="space-between"
                v-for="price in item.prices"
                :key="price.index"
              >
                <p class="pricing__price">{{ price }}</p>
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="1" sm="2" md="0" class="d-flex d-md-none"></v-col>
            <v-col cols="11" sm="10" md="12">
              <p class="pricing__note ml-n3 ml-md-1 mt-n6">{{ item.note }}</p>
              <ul class="pricing__list mt-n4">
                <li v-for="list in item.list" :key="list.index">
                  {{ list }}
                </li>
              </ul>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>

    <v-row justify="center" justify-md="end">
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
  },
  created() {
    document.title = "Creative Reyne - Pricing";
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
