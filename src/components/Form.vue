<template>
  <v-form ref="form" @submit.prevent="sendEmail">
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="form.first"
            :rules="rules.nameRules"
            color="red"
            label="First name *"
            name="from_first"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="form.last"
            color="red"
            label="Last name"
            name="from_last"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="form.email"
            :rules="rules.emailRules"
            color="red"
            label="Email *"
            name="from_email"
            type="email"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-textarea
            v-model="form.message"
            color="red"
            name="from_message"
            required
          >
            <template v-slot:label>
              <div>Message *</div>
            </template>
          </v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-card-actions>
          <v-btn
            :disabled="!formIsValid"
            outlined
            tile
            color="red"
            large
            type="submit"
            class="contact__button"
          >
            Send Message
          </v-btn>
        </v-card-actions>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "Form",
  data() {
    const defaultForm = Object.freeze({
      first: "",
      last: "",
      email: "",
      message: ""
    });

    return {
      form: Object.assign({}, defaultForm),
      rules: {
        nameRules: [v => !!v || "First name is required"],
        emailRules: [
          v => !!v || "E-mail is required",
          v => /.+@.+/.test(v) || "E-mail must be valid"
        ]
      },
      defaultForm
    };
  },

  computed: {
    formIsValid() {
      return (
        this.form.first &&
        this.form.email &&
        /.+@.+/.test(this.form.email) &&
        this.form.message
      );
    }
  },

  methods: {
    resetForm() {
      this.form = Object.assign({}, this.defaultForm);
      this.$refs.form.reset();
    },
    sendEmail: e => {
      emailjs
        .sendForm(
          "service_4ysvek7",
          "template_lg8tddi",
          e.target,
          "user_20V2lpCRDxS6tEJvEjxAP"
        )
        .then(
          result => {
            this.resetForm();
            console.log("SUCCESS!", result.status, result.text);
          },
          error => {
            console.log("FAILED...", error);
          }
        );
    }
  }
};
</script>

<style lang="scss" scoped></style>
