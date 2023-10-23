<template>
  <div>
    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <v-form @submit.prevent="handleLogin">
        <div class="text-subtitle-1 text-medium-emphasis">Account</div>

        <v-text-field
          v-model="username"
          density="compact"
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
          density="compact"
          placeholder="Enter your password"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
        ></v-text-field>

        <v-card class="mb-12" color="surface-variant" variant="tonal"> </v-card>

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
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useAuthStore } from "../store/authStore";

export default defineComponent({
  name: "LoginView",
  data: () => ({
    username: "",
    password: "",
    visible: false,
  }),
  computed: {},
  methods: {
    async handleLogin() {
      try {
        const authStore = useAuthStore();
        await authStore.login(this.username, this.password);
      } catch (error) {
        console.error("Giriş hatası:", error);
        // Giriş hatası durumunda hata işleme ekleyebilirsiniz
      }
    },
  },
  mounted() {},
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
