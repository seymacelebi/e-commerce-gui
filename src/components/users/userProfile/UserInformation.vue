<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-card ref="form">
        <v-card-text>
          <v-row>
            <v-col>
              <v-text-field
                ref="name"
                v-model="firstName"
                :rules="[() => !!firstName || 'This field is required']"
                :error-messages="errorMessages"
                label="İsim"
                placeholder="İsim"
                required
              ></v-text-field
            ></v-col>
            <v-col>
              <v-text-field
                ref="name"
                v-model="lastName"
                :rules="[() => !!lastName || 'This field is required']"
                :error-messages="errorMessages"
                label="Soyisim"
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <v-text-field
            ref="name"
            v-model="email"
            :rules="[() => !!email || 'This field is required']"
            :error-messages="errorMessages"
            label="Email"
            placeholder="John Doe"
            required
          ></v-text-field>
          <v-text-field
            ref="name"
            v-model="password"
            :rules="[() => !!password || 'This field is required']"
            :error-messages="errorMessages"
            label="Şifre"
            placeholder="John Doe"
            required
          ></v-text-field>
          <v-text-field
            ref="name"
            v-model="phoneNumber"
            :rules="[() => !!phoneNumber || 'This field is required']"
            :error-messages="errorMessages"
            label="Telefon Numarası"
            placeholder="John Doe"
            required
          ></v-text-field>
        </v-card-text>
        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
          <v-btn variant="text"> Cancel </v-btn>
          <v-spacer></v-spacer>
          <v-slide-x-reverse-transition>
            <v-tooltip v-if="formHasErrors" location="left">
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon class="my-0" v-bind="attrs" v-on="on">
                  <v-icon>mdi-refresh</v-icon>
                </v-btn>
              </template>
              <span>Refresh form</span>
            </v-tooltip>
          </v-slide-x-reverse-transition>
          <v-btn color="primary" variant="text" @click="submitForm">
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UserInformation",
  data: () => ({
    errorMessages: "",
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    phoneNumber: "",
    formHasErrors: false,
  }),
  methods: {
    async submitForm() {
      const data = {
        email: this.email,
        firstName: this.firstName,
        lastName: this.lastName,
        phoneNumber: this.phoneNumber,
        password: this.password,
      };
      try {
        const response = await fetch(" http://localhost:3000/users", {
          method: "POST",
          body: JSON.stringify(data),
        });

        if (response.ok) {
          const jsonResponse = await response.json();
          console.log(jsonResponse);
        } else {
          console.log("POST request failed");
        }
      } catch (error) {
        console.log("Error:", error);
      }
    },
  },
});
</script>
