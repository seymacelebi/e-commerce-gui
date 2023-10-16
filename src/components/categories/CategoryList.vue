<template>
  <v-card>
    <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
      <v-tab :value="index" @click="filterClouds(category)" v-for="(category, index) in categories" :key="index">
        {{ category }}
      </v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item v-for="(category, index) in categories" :key="index" :value="index">
      </v-window-item>
    </v-window>
  </v-card>
</template>

<script lang="ts">
import { useProductStore } from "../../store/productStore";
import { mapState, mapActions } from "pinia";

export default {
  data: () => ({
    categories: [] as any,
    selectedCategoryId: null,
    filteredProducts : [] as any,
  }),
  computed: {
    ...mapState(useProductStore, ["getProductGetters"]),
  },
  methods: {
    ...mapActions(useProductStore, ["setfilter"]),
    async categoryList() {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();
      this.categories = data;
    },
    navigateToCategory(category:any) {
      // Seçilen kategoriye ait ürünleri filtrele
      this.filteredProducts = this.getProductGetters.filter(product => product.category === category);
      console.log(this.filteredProducts, "filtered")
    },
     filterClouds(catName: any) {
      console.log("click =>", catName);
       this.setfilter(catName);
    },
  },
  mounted() {
    this.getProductGetters;
     this.categoryList();
  },
};
</script>

<style></style>
