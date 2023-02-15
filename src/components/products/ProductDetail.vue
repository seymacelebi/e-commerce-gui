<template>
  <v-app>
    <AppHeader />
    <v-container fluid>
      <v-row>
        <v-col cols="6" v-for="(product, index) in products" :key="index">
          <v-card class="ml-15 mt-10 rounded-xl" max-width="800" flat outlined>
            <div align="center" justify="center">
              <v-img max-width="800" contain :src="product.url"></v-img>
            </div>

            <v-card-title primary-title class="mx-auto">{{
              product.title
            }}</v-card-title>
            <v-card-actions> </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card class="my-12 mr-15" max-width="600">
            <template v-slot:loader="{ isActive }">
              <v-progress-linear
                :active="isActive"
                color="deep-purple"
                height="4"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-card-item>
              <v-card-title>
                <p class="text-h4 text--primary">Origin</p></v-card-title
              >
            </v-card-item>

            <v-card-text>
              <div>
                Small plates, salads & sandwiches - an intimate setting with 12
                indoor seats plus patio seating.
              </div>
            </v-card-text>

            <v-divider class="mx-4 mb-1"></v-divider>

            <div class="px-4"></div>

            <v-card-actions>
              <v-btn variant="tonal" color="success"> Sepete Ekle </v-btn>
            </v-card-actions>
          </v-card>
          <v-card max-width="600">
            <v-card-item>
              <div>
                <v-card-text class="pb-0">
                  <p>
                    late 16th century (as a noun denoting a place where alms
                    were distributed): from medieval Latin eleemosynarius, from
                    late Latin eleemosyna ‘alms’, from Greek eleēmosunē
                    ‘compassion’
                  </p>
                </v-card-text>
              </div>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import AppHeader from "../AppHeader.vue";
export default defineComponent({
  name: "ProductDetail",

  inject: ["products"],
  components: {
    AppHeader,
  },
});
</script>
