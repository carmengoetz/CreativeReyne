<template>
  <div class="contact my-16">
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
              <span class="contact__description--name">Alexander Reyne</span>
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
            <v-card-title class="contact__title text-uppercase pl-0"
              >Email Me</v-card-title
            >
          </v-row>
          <v-row justify="space-between">
            <v-col cols="12">
              <Form />
            </v-col>
          </v-row>
          <v-row justify="center"
            ><v-card-title class="contact__title text-uppercase pl-0 my-6"
              >Direct Message Me</v-card-title
            >
          </v-row>
          <v-row>
            <Socials
              class="contact__socials my-4"
              size="60px"
              className="mr-10"
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

    &--name {
      font-weight: 700;
      color: $creator-secondary;
    }
  }

  &__title {
    font-family: $MADEEvolveSans;
    font-size: 84px;
    font-weight: 500;
    color: $text-white;

    @media (max-width: $xl) {
      font-size: 64px;
    }

    @media (max-width: $lg) {
      font-size: 44px;
    }
  }
}
</style>
