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
            <v-btn
              type="submit"
              color="primary"
              class="mx-auto"
              @click="handleLogin"
              >Giriş Yap</v-btn
            ></v-card-actions
          >
        </v-form>
      </v-sheet>
    </v-card>
  </v-container>
</template>
<script lang="ts">
import { mapActions, mapState } from "pinia";
import { defineComponent } from "vue";
import { useUserStore } from "../store/userStore";
import axios from "axios";
import { useAuthStore } from "../store/authStore";
import router from "../router";
export default defineComponent({
  name: "LoginView",
  data: () => ({
    username: "",
    password: "",
  }),
  computed: {
    ...mapState(useUserStore, ["getUser"]),
    ...mapActions(useUserStore, ["login"]),
  },
  methods: {
    handleLogin() {
      const authStore = useAuthStore();
      authStore
        .login(this.username, this.password)
        .then(() => {
          router.push({
            name: "HomeView",
          });
          // Başarılı oturum açma işlemi gerçekleşti, yönlendirme yapabilirsiniz
        })
        .catch((error: any) => {
          console.log(error, "error");
        });
    },
  },
  mounted() {
    this.getUser;
  },
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
