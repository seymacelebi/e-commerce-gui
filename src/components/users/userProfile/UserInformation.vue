<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-card ref="form">
        <v-card-text>
          <v-row>
            <v-col>
              <v-text-field
                ref="name"
                v-model="userDetail.firstName"
                :error-messages="errorMessages"
                label="İsim"
                placeholder="İsim"
                required
              ></v-text-field
            ></v-col>
            <v-col>
              <v-text-field
                ref="name"
                v-model="userDetail.lastName"
                :error-messages="errorMessages"
                label="Soyisim"
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <v-text-field
            ref="name"
            v-model="userDetail.email"
            :error-messages="errorMessages"
            label="Email"
            placeholder="John Doe"
            required
          ></v-text-field>
          <v-text-field
            ref="name"
            v-model="userDetail.password"
            :error-messages="errorMessages"
            label="Şifre"
            placeholder="John Doe"
            required
          ></v-text-field>
          <v-text-field
            ref="name"
            v-model="userDetail.phoneNumber"
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
          <v-btn color="primary" variant="text" @click="updateUser">
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { useToast } from "vue-toastification";
const toast = useToast();
import { defineComponent, inject } from "vue";
import axios from "axios";
export default defineComponent({
  name: "UserInformation",
  data: () => ({
    userDetail: inject("userDetail") as any,
    errorMessages: "",
    body: {} as any,
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    phoneNumber: "",
    formHasErrors: false,
  }),
  methods: {
    async createUser() {
      const data = {
        email: this.email,
        firstName: this.firstName,
        lastName: this.lastName,
        phoneNumber: this.phoneNumber,
        password: this.password,
      };

      try {
        const response = await axios.post("http://localhost:3000/users", data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },

    async updateUser() {
      const data = {
        email: this.body.email,
        firstName: this.body.firstName,
        lastName: this.body.lastName,
        phoneNumber: this.body.phoneNumber,
        password: this.body.password,
      };
      try {
        const response = await axios.put("http://localhost:3000/users/1", data);
        console.log(response, "put");
        toast.success("Güncelleme Yapıldı");
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {},
});
</script>
