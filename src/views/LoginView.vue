<template>
  <v-container
    fluid
    justify-center
    style="
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    "
  >
    <v-card>
      <v-toolbar dark color="primary">
        <v-toolbar-title>Login Page</v-toolbar-title>
      </v-toolbar>
      <v-sheet width="500" class="mx-auto">
        <v-form>
          <v-text-field
            v-model="firstName"
            label="First name"
            :rules="firstNameRules"
          ></v-text-field>

          <v-text-field
            v-model="lastName"
            label="Last name"
            :rules="lastNameRules"
          ></v-text-field>
          <v-card-actions>
            <v-btn type="submit" color="primary" class="mx-auto"
              >Giriş Yap</v-btn
            ></v-card-actions
          >
        </v-form>
      </v-sheet>
    </v-card>
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginView",
  data: () => ({
    firstName: "",
    firstNameRules: [
      (value) => {
        if (value?.length > 3) return true;

        return "First name must be at least 3 characters.";
      },
    ],
    lastName: "123",
    lastNameRules: [
      (value) => {
        if (/[^0-9]/.test(value)) return true;

        return "Last name can not contain digits.";
      },
    ],
  }),
});
</script>
<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
}
</style>
