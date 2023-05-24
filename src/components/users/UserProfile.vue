<template>
  <AppHeader />
  <v-container fluid>
    <v-row justify="center" class="space px-16">
      <v-col><h2>My Account</h2></v-col>
    </v-row>
    <v-row justify="center" class="space px-16">
      <v-col class="fill-height pr-0">
        <v-card max-width="600" style="height: auto" class="fill-height">
          <v-list nav density="compact" class="pa-0">
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              :value="item"
              :title="item.text"
              :to="{ name: item.name }"
              active-color="primary"
              variant="flat"
              rounded
            >
              <template v-slot:prepend>
                <v-icon :icon="item.icon" class="d-none d-lg-flex"></v-icon>
              </template>
            </v-list-item>

            <!-- <v-list-item
              v-for="(item, i) in items"
              :key="i"
              :value="item"
              :title="item.name"
              active-color="primary"
              rounded="xl"
              :to="{ name: item.name }"
            >
              <template v-slot:prepend>
                <v-icon :icon="item.icon"></v-icon>
              </template>
            </v-list-item> -->
          </v-list>
        </v-card>
      </v-col>
      <v-col class="fill-height" sm="8" md="10">
        <v-card class="fill-height pa-0" height="auto"> <RouterView /> </v-card
      ></v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import AppHeader from "../AppHeader.vue";
import axios from "axios";
export default defineComponent({
  name: "UserProfile",
  provide() {
    return {
      userDetail: computed(() => this.userDetail),
    };
  },
  components: { AppHeader },
  data: () => ({
    selectedItem: 0,
    userDetail: {} as any,
    items: [
      { name: "information", icon: "mdi-account", text: "Kişisel Bilgiler" },
      { name: "order", icon: "mdi-package-variant-closed", text: "Siparişler" },
      { name: "favorite", icon: "mdi-star", text: "Favoriler" },
      { name: "changepassword", icon: "mdi-lock", text: "Şifre Değiştir" },
      { name: "adress", icon: "mdi-home", text: "Adresler" },
      { name: "logout", icon: "mdi-exit-to-app", text: "Çıkış Yap" },
    ],
  }),
  methods: {
    async getUser() {
      const response = await axios.get("http://localhost:3000/users/1");
      this.userDetail = response.data;
      console.log(response.data);
    },
  },
  watch: {
    $route(newRoute, lastRoute) {
      console.log(newRoute, "new", lastRoute, "last");
    },
  },
  mounted() {
    this.getUser();
  },
});
</script>
<style scoped>
.card-1 {
  margin-right: 20px;
}
.card-2 {
  margin-left: 20 px;
}
</style>
