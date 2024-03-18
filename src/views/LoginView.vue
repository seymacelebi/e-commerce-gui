<template>
  <v-sheet class="pa-12" rounded style="background-color: deep-purple">
    <v-card
      title="LOGIN PAGE"
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
      style="background-color: deep-purple"
    >
      <v-form @submit.prevent="handleLogin">
        <div class="text-subtitle-1 text-medium-emphasis">Account</div>

        <v-text-field
          v-model="username"
          dense
          placeholder="Email address"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
        ></v-text-field>

        <div
          class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
        >
          Password

          <a
            class="text-caption text-decoration-none text-blue"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Forgot login password?</a
          >
        </div>

        <v-text-field
          v-model="password"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          dense
          placeholder="Enter your password"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
        ></v-text-field>

        <v-card
          class="mb-12"
          color="surface-variant"
          variant="tonal"
          style="background-color: deep-purple"
        >
        </v-card>

        <v-btn
          block
          class="mb-8"
          color="blue"
          size="large"
          type="submit"
          variant="tonal"
        >
          Log In
        </v-btn>

        <v-card-text class="text-center">
          <a
            class="text-blue text-decoration-none"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
          </a>
        </v-card-text>
      </v-form>
    </v-card>
  </v-sheet>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "../store/authStore";

const username = ref("");
const password = ref("");
const visible = ref(false);

const handleLogin = async () => {
  try {
    const authStore = useAuthStore();
    await authStore.login(username.value, password.value);
    localStorage.setItem("username", username.value);
    localStorage.setItem("password", password.value);
  } catch (error) {
    console.error("Giriş hatası:", error);
  }
};
</script>

<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
}
body {
  display: grid;
  place-items: center;
  gap: 50px;
  margin: 0;
  height: 100vh;
  padding: 0 32px;
  background: #eff9ff;
  font-family: "Poppins";
}
.background {
  position: fixed;
  top: -50vmin;
  left: -50vmi;
  width: 100vmin;
  height: 100vmin;
  border-radius: 47% 53% 61% 39% / 45% 51% 49% 55%;
  background: #65c8ff;
}
.card {
  overflow: hidden;
  position: relative;
  z-index: 3;
  width: 94%;
  margin: 0 20px;
  padding: 170px 30px 54px;
  border-radius: 24px;
  background: #ffff;
  text-align: center;
  box-shadow: 0 100px 100px rgb(0 0 0 / 10%);
}
.card::before {
  content: "";
  position: absolute;
  top: -880px;
  left: 50%;
  width: 1000px;
  border-radius: 50%;
  background: #216e72;
}
.background::after {
  content: "";
  position: inherit;
  right: -50vmin;
  bottom: -55vmin;
  height: inherit;
  width: inherit;
  border-radius: inherit;
  background: #143d81;
}
.card .logo {
  position: absolute;
  top: 30px;
  left: 50%;
  translate: -50% 0;
  width: 64px;
  height: 64px;
}
.form {
  margin: 0 0 44px;
  display: grid;
  gap: 12px;
}
.form :is(input, button) {
  width: 100%;
  height: 56px;
  border-radius: 28px;
  font-size: 16px;
  font-family: inherit;
}
.form > input {
  border: 0;
  padding: 0 24px;
  color: #2222;
  background: #ededed;
}
.form > input ::placeholder {
  color: rgb(0, 0, 0 / 28%);
}
.form > button {
  border: 0;
  background: #f9f9f9;
  display: grid;
  place-items: center;
  font-weight: 500;
  cursor: pointer;
}
.card > footer {
  color: #a1a1a1;
}
.card > footer > a {
  color: #216ce7;
}
</style>
