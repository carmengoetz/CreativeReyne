<template>
  <div class="contact my-16">
    <v-container>
      <v-row>
        <v-col cols="12" md="5">
          <Logo class="mx-auto" />
          <div class="text-body-1 mt-4">
            <span class="font-weight-bold">Alexander Reyne</span>
            is a Graphic Designer currently residing in Saskatchewan, Canada. At
            15 years old he realized he wanted to use his creative ability to
            bring people’s passions to life. Almost 15 years later, with
            experience in nearly every facet of the graphic design industry,
            Alexander turned his attention to creating beautiful graphics for
            online communities and streamers looking to stand out in their
            space.
          </div>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="12" md="6">
          <v-row>
            <v-col cols="6">
              <v-card-title class="contact__email pl-0">
                Contact Me
              </v-card-title>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="6">
              <Socials class="contact__socials text-right" />
            </v-col>
          </v-row>
          <v-row>
            <Form />
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Logo from "@/components/Logo.vue";
import Form from "@/components/Form.vue";
import Socials from "@/components/Socials.vue";

export default {
  name: "Contact",
  components: { Logo, Form, Socials }
};
</script>

<style lang="scss" scoped>
.contact {
  &__email {
    font-family: "Montserrat", sans-serif;
    font-size: 36px;
  }
}
</style>
