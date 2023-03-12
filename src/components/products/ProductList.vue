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
        <v-img :src="product.image" height="300px" cover> </v-img>

        <v-card-title> {{ product.title }} </v-card-title>

        <v-card-subtitle>{{ product.description }} </v-card-subtitle>

        <v-card-actions>
          <v-btn
            outlined
            class="mt-n2 add"
            @click="() => updateQuantity(product.quantity - 1)"
          >
            <v-icon color="green" variant="outlined"> mdi-minus </v-icon>
          </v-btn>
          <p>{{ product.quantity }}</p>
          <v-btn outlined class="mt-n2 add">
            <v-icon color="green" variant="outlined"> mdi-plus </v-icon>
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn
            color="success"
            class="mx-2 mt-n3"
            @click="
              $router.push({
                name: 'ProductDetail',
                params: { id: product.id },
              })
            "
            >Detaya Git</v-btn
          >
          <!-- 
          <v-btn class="mx-2 mt-n3" color="green" @click="addBasket(product)">
            <v-icon> mdi-shopping </v-icon>
          </v-btn> -->
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
    ...mapActions(useProductStore, ['getAllProduct'])
  },
  methods: {

  
    // addBasket(item: BasketObjectType) {
    //   this.addOrRemoveBasket(item);
    //   console.log(item, "laf");
    // },
    // ...mapActions(useCartStore, ["addOrRemoveBasket"]),
  },

  mounted() {
    
    this.getAllProduct
    
  },
};
</script>

<style></style>
