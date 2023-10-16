<template>
  <v-app>
    <AppHeader />
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-toolbar flat color="transparent">
            <v-toolbar-title class="text-h6">Kategoriler</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn-toggle v-model="toggle_exclusive" group color="#49D9A0">
            </v-btn-toggle>
          </v-toolbar>
          <CategoryList />
          <v-toolbar flat color="transparent" class="mt-5">
            <v-toolbar-title class="text-h6">Bütün Ürünler</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
              variant="tonal"
              color="green"
              @click="
                $router.push({
                  name: 'ProductList',
                })
              "
              >Hepsini Gör</v-btn
            >
          </v-toolbar>
          <ProductList />
          <v-card flat color="#E2F2E5" class="rounded-xl mt-8"> </v-card>
        </v-col>
      </v-row>
    </v-container>
    <AppFooter />
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppFooter from "../components/AppFooter.vue";
import AppHeader from "../components/AppHeader.vue";
import CategoryList from "../components/categories/CategoryList.vue";
import ProductList from "../components/products/ProductList.vue";
export default defineComponent({
  name: "HomeView",
  data: () => ({
    toggle_exclusive: 1,
  }),
  components: {
    AppHeader,
    CategoryList,
    ProductList,
    AppFooter,
  },
});
</script>
