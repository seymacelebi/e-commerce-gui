<template>
  <v-row justify="center" class="space px-16">
    <v-col
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
export default {
  data: () => ({
    products: [] as any,

    rating: 3,
  }),

  computed: {
    ...mapState(useProductStore, ["getProductGetters"]),
    ...mapState(useCartStore, ["getBasketGetters"]),
    ...mapState(useCartStore, ["getFilterCategory"]),
    ...mapActions(useProductStore, ["getAllProduct"]),
  },
  methods: {
    ...mapActions(useCartStore, ["setAddBasket"]),
    addProduct(product: any) {
      this.setAddBasket(product);
      console.log("ekledi", this.getBasketGetters);
    },
  },

  mounted() {
    this.getAllProduct;
    this.getBasketGetters;
    this.getFilterCategory;
  },
};
</script>

<style></style>
