<template>
  <v-row>
    <v-col v-for="category in filteredCategories" :key="category.id">
      <v-card class="mx-auto" max-width="300">
        <v-img
          :src="category.image"
          height="150px"
          to="/productlist"
          @click="filterClouds(category.name)"
          cove
        ></v-img>
        <v-card-text> {{ category.name }} </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { useProductStore } from "../../store/productStore";
import { mapState, mapActions } from "pinia";
import axios from "axios";
import { useCartStore } from "../../store/cartStore";
import { Product } from "../../models/entities/ProductDto";
import { Category } from "../../models/entities/CategoryDto";
export default {
  data: () => ({
    categories: [] as any,

    selectedCategoryId: null,
    selectedCategory: "",
  }),
  computed: {
    ...mapState(useCartStore, ["getFilterCategory"]),
    ...mapState(useProductStore, ["getProductGetters"]),

    filteredProducts(): Product[] {
      if (this.selectedCategoryId === null) {
        return this.getProductGetters;
      } else {
        return this.getProductGetters.filter((product: Product) => {
          return product.category.id === this.selectedCategoryId;
        });
      }
    },

    filteredCategories(): Category[] {
      const categories: Category[] = [];
      this.filteredProducts.forEach((product: Product) => {
        if (
          !categories.some((c: Category) => c.name === product.category.name)
        ) {
          categories.push(product.category);
        }
      });
      return categories;
    },
  },
  methods: {
    ...mapActions(useProductStore, ["setfilter"]),
    filterClouds(catName: any) {
      this.$router.push({ name: "ProductList", path: "/productlist" });
      console.log("click =>", catName);
      this.setfilter(catName);
    },
    filteredProducts() {
      if (this.selectedCategory === "") {
        return this.getProductGetters;
      } else {
        return this.getProductGetters.filter(
          (p: any) => p.category === this.selectedCategory
        );
      }
    },
  },
  mounted() {
    this.getProductGetters;
    this.getFilterCategory;
  },
};
</script>

<style></style>
