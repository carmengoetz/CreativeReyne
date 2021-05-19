<template>
  <div class="pricing pt-16">
    <v-container>
      <v-row>
        <v-card-title
          class="pricing__title text-uppercase white--text mx-auto mb-12"
          :class="
            site == 'creators'
              ? 'pricing__title--creators'
              : 'pricing__title--standard'
          "
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
          class="mb-4 ml-0 mr-0 ml-md-16 mr-md-n16 ml-lg-0 mr-lg-0 ml-xl-8 mr-xl-n8"
        >
          <v-row justify="center" justify-md="start">
            <v-img
              class="pricing__image"
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
            <v-row justify="center" justify-md="start" class="mx-16 mx-md-0">
              <v-col cols="1" md="0" class="d-md-none"></v-col>
              <v-col cols="5" lg="6" xl="5">
                <v-row>
                  <p
                    class="pricing__item ml-16 ml-md-0"
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
              <v-col cols="6" lg="6" xl="7">
                <v-row
                  justify="space-between"
                  v-for="price in item.prices"
                  :key="price.index"
                >
                  <p class="pricing__price">{{ price }}</p>
                </v-row>
              </v-col>
            </v-row>
            <v-row class="ml-13 ml-md-0">
              <p class="pricing__note ml-16 ml-md-1">{{ item.note }}</p>
            </v-row>
            <v-row>
              <ul class="pricing__list mt-n4 ml-7">
                <li v-for="list in item.list" :key="list.index">
                  {{ list }}
                </li>
              </ul>
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
      creatorsColumns: [
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
      standardColumns: [
        {
          image: require("@/assets/images/standard/standard-print-design1.png"),
          title: "Print Design",
          items: [
            {
              item: "Business Cards",
              prices: ["$80 (double sided design)"]
            },
            {
              item: "Poster Design",
              prices: ["$150"]
            },
            {
              item: "Flyer Design",
              prices: ["$100"]
            },
            {
              item: "Menu Design",
              prices: ["$100/page single sided"]
            },
            {
              item: "Trifold Brochure",
              prices: ["$200"]
            },
            {
              item: "Other Inquiries",
              prices: ["Contact me =)"]
            }
          ],
          cols: "3"
        },
        {
          image: require("@/assets/images/standard/standard-brand-package.png"),
          title: "Social Package",
          items: [
            {
              item: "Full Package",
              prices: ["$1250"],
              note: "Includes:",
              list: [
                "Logo Design",
                "Color Pallet",
                "Business Card Design",
                "Letterhead Design",
                "Flyer Design",
                "Brochure Design",
                "Pop-up Banner Design",
                "Social Media Cover Photo (x3)",
                "Social Media Profile Picture (x4)",
                "Files for each design: .AI, .EPS, .PDF"
              ]
            }
          ],
          cols: "3"
        },
        {
          image: require("@/assets/images/standard/standard-websites.png"),
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
              item: "Add Online Store",
              prices: ["Starting at $600"]
            }
          ],
          cols: "3"
        },
        {
          image: require("@/assets/images/standard/standard-logo-design.png"),
          title: "Logo Design",
          items: [
            {
              item: "Starting at",
              prices: ["$500"],
              note: "(Prices vary depending on project)"
            }
          ],
          cols: "3"
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
