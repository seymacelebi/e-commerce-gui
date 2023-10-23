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
        <v-form @submit.prevent="handleLogin">
          <v-text-field
            v-model="username"
            label="Email"
            class="px-6 py-8"
          ></v-text-field>

          <v-text-field
            v-model="password"
            label="Şifre"
            class="px-6"
          ></v-text-field>
          <v-card-actions>
            <button type="submit" color="primary" class="mx-auto">
              Giriş Yap
            </button>
          </v-card-actions
          >
        </v-form>
      </v-sheet>
    </v-card>
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useAuthStore } from "../store/authStore";

export default defineComponent({
  name: "LoginView",
  data: () => ({
    username: "",
    password: "",
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
