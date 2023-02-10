<template>
  <v-app>
    <AppHeader />
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-toolbar flat color="transparent">
            <v-toolbar-title class="text-h6">Category</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn-toggle v-model="toggle_exclusive" group color="#49D9A0">
              <v-btn>
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
              <v-btn>
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-btn-toggle>
          </v-toolbar>
          <CategoryList />
          <v-toolbar flat color="transparent" class="mt-5">
            <v-toolbar-title class="text-h6">Popular Product</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn variant="tonal" color="green">See All</v-btn>
          </v-toolbar>
          <ProductList />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppHeader from "../components/AppHeader.vue";
import CategoryList from "../components/categories/CategoryList.vue";
import ProductList from "../components/products/ProductList.vue";
export default defineComponent({
  name: "HomeView",
  data: () => ({
    toggle_exclusive: 1,
  }),
  components: { AppHeader, CategoryList, ProductList },
});
</script>
