<template>
  <div class="brand my-16">
    <v-container>
      <v-row>
        <v-card-title class="brand__title white--text mx-auto"
          >why choose creative reyne?</v-card-title
        >
      </v-row>
      <v-row>
        <v-col v-for="col in columns" :key="col.index" col="4" class="mx-6">
          <v-row
            ><v-img
              class="brand__image mx-auto"
              max-width="400"
              :src="col.image"
            ></v-img
          ></v-row>
          <v-row>
            <v-card-title class="brand__subtitle mx-auto">
              {{ col.title }}
            </v-card-title>
            <v-row>
              <p class="brand__description mx-16 mt-5 text-center">
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
  data: () => {
    return {
      columns: [
        {
          image: require("@/assets/images/creators-logo.png"),
          title: "Experience",
          description:
            "With over 10 years of experience in graphic design and printing, you can rest knowing I will find a solution that works for you and your platform"
        },
        {
          image: require("@/assets/images/creators-emotes.png"),
          title: "Tailored Process",
          description:
            "It all begins with an idea. Maybe you want to launch a new stream. Maybe you want to turn your youtube channel into something more. Or maybe you have a podcast to share with the world. Whatever it is, I will make sure you don’t go unnoticed"
        },
        {
          image: require("@/assets/images/creators-websites1.png"),
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
  &__title {
    font-family: $MADEEvolveSans !important;
    font-size: 88px;
    text-transform: uppercase;

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
    font-size: 40px;
    color: $creator-secondary;
    text-transform: uppercase;
  }

  &__description {
    font-family: $AcuminPro;
    font-size: 20px;
    color: $text-white;
  }
}
</style>
