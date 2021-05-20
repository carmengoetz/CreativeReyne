<template>
  <v-container class="contact py-16">
    <v-row>
      <v-col cols="12" md="4">
        <v-row class="">
          <v-img width="500" max-height="500" :src="image" :lazy-src="imageLazy"
            ><template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row> </template
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
            {{ site == "creators" ? creatorsDescription : standardDescription }}
          </p>
        </v-row>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12" md="7" class="mx-4 mx-md-0">
        <v-row class="mb-4">
          <v-card-title
            class="contact__title text-uppercase pl-0"
            :class="
              site == 'creators'
                ? 'contact__title--creators'
                : 'contact__title--standard'
            "
            >{{ title }}</v-card-title
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
            >{{ subtitle }}</v-card-title
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
</template>

<script>
import Form from "@/components/Form.vue";
import Socials from "@/components/Socials.vue";
import { contact } from "@/constants";

export default {
  name: "Contact",
  components: { Form, Socials },
  data: () => {
    return {
      title: contact.title,
      subtitle: contact.subtitle,
      creatorsDescription: contact.creatorsDescription,
      standardDescription: contact.standardDescription,
      image: contact.image,
      imageLazy: contact.imageLazy
    };
  },
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
    letter-spacing: 0.035em;

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
    @media (max-width: $md) {
      font-size: 36px;
    }
  }
}
</style>
