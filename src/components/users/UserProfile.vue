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
            <v-list-subheader>REPORTS</v-list-subheader>

            <v-list-item
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
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col class="fill-height" sm="8" md="10">
        <v-card height="auto" class="fill-height overflow-y-auto pa-0">
          <RouterView /> </v-card
      ></v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import AppHeader from "../AppHeader.vue";

export default defineComponent({
  name: "UserProfile",
  components: { AppHeader },
  data: () => ({
    selectedItem: 0,
    items: [
      { name: "Kişiler Bilgiler", icon: "mdi-account" },
      { name: "Siparişler", icon: "mdi-package-variant-closed" },
      { name: "Favoriler", icon: "mdi-star" },
      { name: "Şifre Değiştir", icon: "mdi-lock" },
      { name: "Adres", icon: "mdi-home" },
      { name: "Çıkış Yap", icon: "mdi-exit-to-app" },
    ],
  }),
  watch: {
    $route(newRoute, lastRoute) {
      console.log(newRoute, "new", lastRoute, "last");
    },
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
