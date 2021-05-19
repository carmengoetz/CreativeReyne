<template>
  <div class="contact pt-16">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-row>
            <v-img
              width="500"
              max-height="500"
              src="@/assets/images/alexander-reyne.png"
            ></v-img>
          </v-row>
          <v-row>
            <p class="contact__description mt-4">
              <span
                :class="
                  site == 'creators'
                    ? 'contact__description--creators'
                    : 'contact__description--standard'
                "
                >Alexander Reyne</span
              >
              is a Graphic Designer currently residing in Saskatchewan, Canada.
              At 15 years old he realized he wanted to use his creative ability
              to bring people’s passions to life. Almost 15 years later, with
              experience in nearly every facet of the graphic design industry,
              Alexander turned his attention to creating beautiful graphics for
              online communities and streamers looking to stand out in their
              space.
            </p>
          </v-row>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="12" md="7">
          <v-row class="mb-4">
            <v-card-title
              class="contact__title text-uppercase pl-0"
              :class="
                site == 'creators'
                  ? 'contact__title--creators'
                  : 'contact__title--standard'
              "
              >Email Me</v-card-title
            >
          </v-row>
          <v-row justify="space-between">
            <v-col cols="12">
              <Form :site="site" />
            </v-col>
          </v-row>
          <v-row justify="center"
            ><v-card-title
              class="contact__title text-uppercase pl-0 my-6"
              :class="
                site == 'creators'
                  ? 'contact__title--creators'
                  : 'contact__title--standard'
              "
              >Direct Message Me</v-card-title
            >
          </v-row>
          <v-row>
            <Socials
              class="contact__socials my-4"
              size="60px"
              className="mr-10"
              page="contact"
            />
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Form from "@/components/Form.vue";
import Socials from "@/components/Socials.vue";

export default {
  name: "Contact",
  components: { Form, Socials },
  computed: {
    site() {
      return this.$store.state.site;
    }
  },
  created() {
    document.title = "Creative Reyne - Contact";
  }
};
</script>

<style lang="scss" scoped>
.contact {
  &__description {
    font-size: 24px;
    color: $text-white;

    &--creators {
      font-weight: 700;
      color: $creator-secondary;
    }

    &--standard {
      font-weight: 700;
      color: $text-black;
    }
  }

  &__title {
    font-size: 84px;
    font-weight: 500;
    color: $text-white;

    &--creators {
      font-family: $MADEEvolveSans;
    }

    &--standard {
      font-family: $BebasNeue;
      letter-spacing: 0.24em;
    }

    @media (max-width: $xl) {
      font-size: 64px;
    }

    @media (max-width: $lg) {
      font-size: 44px;
    }
  }
}
</style>
