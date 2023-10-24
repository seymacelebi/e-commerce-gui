<template>
  <v-card>
    <v-card min-width="600">
      <v-row>
        <v-col>
          <v-list color="transparent" class="d-flex flex-wrap">
            <v-list-item>
              <v-avatar color="red" variant="flat" size="small">
                <span>deneme</span>
              </v-avatar>
            </v-list-item>
            <v-list-item>
              <span class="text-subtitle-2 text-blue-grey-lighten-1"
                >deneem</span
              >
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="6" class="mt-3 text-end">
          <v-btn
            variant="plain"
            stacked
            @click="closeCard()"
            :size="40"
            class="mr-3"
          >
            <v-icon icon="mdi-exit-to-app" size="small"></v-icon>
          </v-btn>
        </v-col>
      </v-row>
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
      </v-list>
    </v-card>
  </v-card>
</template>

<script lang="ts">
import { mapActions } from "pinia";
import { defineComponent } from "vue";
import { useAuthStore } from "../store/authStore";

export default defineComponent({
  name: "LoginInformation",
  data() {
    return {
      items: [
        { name: "information", icon: "mdi-account", text: "Kişisel Bilgiler" },
        {
          name: "order",
          icon: "mdi-package-variant-closed",
          text: "Siparişler",
        },
        { name: "favorite", icon: "mdi-star", text: "Favoriler" },
        { name: "changepassword", icon: "mdi-lock", text: "Şifre Değiştir" },
        { name: "adress", icon: "mdi-home", text: "Adresler" },
        { name: "logout", icon: "mdi-exit-to-app", text: "Çıkış Yap" },
      ],
    };
  },
  methods: {
    ...mapActions(useAuthStore, ["logout"]),
    closeCard() {
      this.logout();
    },
  },
});
</script>
