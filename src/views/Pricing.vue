<template>
  <div class="pricing my-16">
    <v-container>
      <v-row>
        <v-card-title class="pricing__title text-uppercase white--text mx-auto"
          >pricing</v-card-title
        >
      </v-row>
      <v-row>
        <v-col
          v-for="col in columns"
          :key="col.index"
          cols="12"
          md="6"
          :lg="col.cols"
        >
          <v-row justify="center" justify-md="start">
            <v-img
              class="pricing__image"
              max-width="300"
              :src="col.image"
            ></v-img
          ></v-row>
          <v-row justify="center" justify-md="start">
            <v-card-title class="pricing__subtitle text-uppercase mb-10">
              {{ col.title }}
            </v-card-title>
          </v-row>
          <v-row
            justify="center"
            justify-md="start"
            v-for="item in col.items"
            :key="item.index"
            class="mx-16 mx-md-0"
          >
            <v-col cols="1" md="0" class="d-md-none"></v-col>
            <v-col cols="5" lg="6" xl="5">
              <v-row>
                <p class="pricing__item ml-16 ml-md-0">{{ item.item }}:</p>
              </v-row>
            </v-col>
            <v-col cols="6" lg="6" xl="7">
              <v-row
                justify="space-between"
                v-for="price in item.prices"
                :key="price.index"
              >
                <p class="pricing__price">{{ price }}</p>
              </v-row>
            </v-col>
            <v-row class="ml-13 ml-md-0">
              <p class="pricing__note ml-16 ml-md-1">{{ item.note }}</p>
            </v-row>
          </v-row>
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
  </div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  name: "Pricing",
  components: {
    Button
  },
  data: () => {
    return {
      columns: [
        {
          image: require("@/assets/images/creators/creators-emotes.png"),
          title: "Emotes/Badges",
          items: [
            {
              item: "Twitch Badges",
              prices: [
                "$100 (color-changing badges x6)",
                "$240 (evolving badges x6)"
              ]
            },
            {
              item: "Twitch Emotes",
              prices: ["$30 each"]
            },
            {
              item: "Discord Emotes",
              prices: ["$30 each", "$20 each (set of 16)"]
            }
          ],
          cols: "4"
        },
        {
          image: require("@/assets/images/creators/creators-socials.png"),
          title: "Social Package",
          items: [
            {
              item: "Profile Picture",
              prices: ["$20 (1round + 1 square)"]
            },
            {
              item: "Cover Photo",
              prices: ["$100 (single site)", "$25 each (extra sites)"]
            },
            {
              item: "Twitch Panels",
              prices: ["$20 each"]
            }
          ],
          cols: "3"
        },
        {
          image: require("@/assets/images/creators/creators-websites1.png"),
          title: "Websites",
          items: [
            {
              item: "Landing page",
              prices: ["$600"]
            },
            {
              item: "Additional Pages",
              prices: ["$200 each"]
            },
            {
              item: "Add Merch Store",
              prices: ["$600"]
            }
          ],
          cols: "3"
        },
        {
          image: require("@/assets/images/creators/creators-logo.png"),
          title: "Logo Design",
          items: [
            {
              item: "Starting at",
              prices: ["$500"],
              note: "(Prices vary depending on project)"
            }
          ],
          cols: "2"
        }
      ],
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
  created() {
    document.title = "Creative Reyne - Pricing";
  }
};
</script>

<style lang="scss" scoped>
.pricing {
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
    color: white;

    @media (max-width: $xl) {
      font-size: 28px;
    }
  }

  &__item {
    font-size: 20px;
    font-weight: 700;
    color: $creator-secondary;

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
}
</style>
