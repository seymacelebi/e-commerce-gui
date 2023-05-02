<template>
  <v-row>
    <v-col v-for="category in filteredCategories" :key="category.id">
      <v-card class="mx-auto" max-width="300">
        <v-img
          :src="category.image"
          height="150px"
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
import { Product } from '../../models/entities/ProductDto';
import { Category } from '../../models/entities/CategoryDto';
export default {
  data: () => ({
    categories: [] as any,
    uniqueCategories: new Array<Product>
  }),
  computed: {
    ...mapState(useCartStore, ["getFilterCategory"]),
    ...mapState(useProductStore, ["getProductGetters"]),

  //     categories(): Product[] {   
  //   this.getProductGetters.forEach((product:any) => {
  //     if (!this.uniqueCategories.some((c: Category) => c.name === product.category.name )) {
  //       this.uniqueCategories.push(product.category);
  //     }
  //   });
  //   return this.uniqueCategories;
  // },
   filteredProducts(): Product[] {
      return this.getProductGetters.filter((product: Product) => {
        return product.category.id 
      });
    },
    filteredCategories(): Category[]{
      const categories: Category[] = [];
      this.filteredProducts.forEach((product:Product)=>{
           if (!categories.some((c: Category) => c.name === product.category.name)) {
          categories.push(product.category);
        }
      });
            return categories;
    }
  },
  //  computed: {
  //   ...mapState(useCartStore, ["getFilterCategory"]),
  //   ...mapState(useProductStore, ["getProductGetters"]),
  //     categories(): Product[] {
    
  //   this.getProductGetters.forEach((product:Product) => {
  //       if (!this.uniqueCategories.some((c: Category) => c.name === product.category.name)) {
  //         this.categories.push(product.category);
  //       }
  //   });
  //   return this.uniqueCategories;  
  // },

  //  filteredProducts(): Product[] {
  //     return this.getProductGetters.filter((product: Product) => {
  //       return product.category.name !== 'Kategori 1'; // Filter condition
  //     });
  //   },
  //   filteredCategories(): Category[]{
  //     const categories: Category[] = [];
  //     this.filteredProducts.forEach((product:Product)=>{
  //          if (!categories.some((c: Category) => c.name === product.category.name)) {
  //         categories.push(product.category);
  //       }
  //     });
  //           return categories;
  //   }
  // },
  methods: {
  
  },
  mounted() {
    this.getProductGetters;
    this.getFilterCategory;
    console.log("filter", this.getFilterCategory);
  },
};
</script>

<style></style>
