<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-card ref="form">
        <v-card-text>
          <v-text-field
            v-model="password1"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show2 ? 'text' : 'password'"
            name="input-10-2"
            label="Şifre"
            hint="At least 8 characters"
            class="input-group--focused"
            @click:append="show2 = !show2"
          ></v-text-field>

          <v-text-field
            v-model="password2"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show2 ? 'text' : 'password'"
            name="input-10-2"
            label="Şifre Yeniden"
            hint="At least 8 characters"
            class="input-group--focused"
            @click:append="show2 = !show2"
          ></v-text-field>
        </v-card-text>

        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
          <v-btn variant="text"> Cancel </v-btn>
          <v-spacer></v-spacer>
          <v-slide-x-reverse-transition>
            <v-tooltip v-if="formHasErrors" location="left">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  class="my-0"
                  v-bind="attrs"
                  @click="resetForm"
                  v-on="on"
                >
                  <v-icon>mdi-refresh</v-icon>
                </v-btn>
              </template>
              <span>Refresh form</span>
            </v-tooltip>
          </v-slide-x-reverse-transition>
          <v-btn color="primary" variant="text" @click="updatePassword">
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import axios from "axios";
import { defineComponent, inject } from "vue";

export default defineComponent({
  name: "UserChangePassword",
  data: () => ({
    userDetail: inject("inventoryDetail") as any,
    formHasErrors: false,
    show1: false,
    show2: true,
    password: "Password",
    password1: "",
    password2: "",
    rules: {
      required: (value: any) => !!value || "Required.",
      min: (v: any) => v.length >= 8 || "Min 8 characters",
      emailMatch: () => `The email and password you entered don't match`,
    },
  }),
  methods: {
    resetForm() {},
    async updatePassword() {
      const data = {
        password1: this.password1,
        password2: this.password2,
      };
      try {
        if ((this.password1 = this.password2)) {
          const response = await axios.put("http://localhost:3000/users", data);
          console.log(response, "put");
        } else {
          console.log("aynı değil");
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
});
</script>
