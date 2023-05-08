<template>
  <v-row justify="center" class="space px-16">
    <v-col v-if="getFilterCategory.length > 0">
      <v-row>
        <v-col v-for="(product, index) in getFilterCategory" :key="index">
          <v-card class="mx-auto" max-width="400">
            <v-img :src="product.images[0]" height="300px" cover> </v-img>

            <v-card-title> {{ product.title }} </v-card-title>

            <v-card-subtitle>{{ product.description }} </v-card-subtitle>

            <v-card-actions>
              <v-btn rounded="lg" class="mt-n2 add">
                {{ product.price }} $
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn
                color="success"
                class="mx-2 mt-n3"
                @click="
                  $router.push({
                    name: 'Detail',
                    params: { id: product.id },
                  })
                "
                >Detaya Git</v-btn
              >

              <v-btn
                class="mx-2 mt-n3"
                color="green"
                @click="addProduct(product)"
              >
                <v-icon> mdi-shopping </v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
    <v-col
      v-else
      cols="12"
      xs="12"
      sm="6"
      md="4"
      v-for="(product, index) in getProductGetters"
      :key="index"
    >
      <v-card class="mx-auto" max-width="400">
        <v-img :src="product.images[0]" height="300px" cover> </v-img>

        <v-card-title> {{ product.title }} </v-card-title>

        <v-card-subtitle>{{ product.description }} </v-card-subtitle>

        <v-card-actions>
          <v-btn rounded="lg" class="mt-n2 add"> {{ product.price }} $ </v-btn>

          <v-spacer></v-spacer>

          <v-btn
            color="success"
            class="mx-2 mt-n3"
            @click="
              $router.push({
                name: 'Detail',
                params: { id: product.id },
              })
            "
            >Detaya Git</v-btn
          >

          <v-btn class="mx-2 mt-n3" color="green" @click="addProduct(product)">
            <v-icon> mdi-shopping </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { useCartStore } from "../../store/cartStore";
import { mapState, mapActions } from "pinia";
import { useProductStore } from "../../store/productStore";
import { Product } from "../../models/entities/ProductDto";
export default {
  data: () => ({
    products: [] as any,
    selectedCategory: null,
  }),

  computed: {
    ...mapState(useProductStore, ["getProductGetters"]),
    ...mapState(useCartStore, ["getBasketGetters"]),
    ...mapState(useProductStore, ["getFilterCategory"]),
    ...mapActions(useProductStore, ["getAllProduct"]),
  },
  methods: {
    ...mapActions(useCartStore, ["setAddBasket"]),
    ...mapState(useProductStore, ["getProductFilteredCategory"]),
    addProduct(product: any) {
      this.setAddBasket(product);
      console.log("ekledi", this.getBasketGetters);
    },
    // filteredProducts: function () {
    //   return this.getProductGetters.filter((product: Product) => {
    //     return product.category.name === this.selectedCategory;
    //   });
    // },
  },

  mounted() {
    this.getAllProduct;
    this.getProductFilteredCategory;
    this.getBasketGetters;
    this.getFilterCategory;
    // this.filteredProducts;
  },
  watch: {},
};
</script>

<style></style>
