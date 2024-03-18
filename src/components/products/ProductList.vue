<template>
  <v-row justify="center" class="space px-16">
    <v-col v-if="getFilterCategory.length > 0">
      <v-row>
        <v-col v-for="(product, index) in getFilterCategory" :key="index">
          <v-card class="mx-auto" max-width="400">
            <v-img
              :src="product.image"
              alt="Product Image"
              height="300px"
              cover
            >
            </v-img>

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
        <v-img :src="product.image" height="300px" cover> </v-img>

        <v-card-title> {{ product.title }} </v-card-title>

        <v-card-subtitle>{{ product.description }} </v-card-subtitle>

        <v-card-actions>
          <v-btn rounded="lg" class="add"> {{ product.price }} $ </v-btn>

          <v-spacer></v-spacer>

          <v-btn
            color="success"
            @click="
              $router.push({
                name: 'Detail',
                params: { id: product.id },
              })
            "
            >Detaya Git</v-btn
          >
          <v-btn color="pink" @click="addToFavorites(product)">
            <v-icon> mdi-heart </v-icon></v-btn
          >

          <v-btn color="green" @click="addProduct(product)">
            <v-icon> mdi-shopping </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { useToast } from "vue-toastification";
const toast = useToast();
import { useCartStore } from "../../store/cartStore";
import { mapState, mapActions } from "pinia";
import { useProductStore } from "../../store/productStore";
import { defineComponent } from "vue";
import AppHeader from "../AppHeader.vue"
export default defineComponent({
  name: "ProductList",
  data: () => ({}),
  components: { AppHeader },
  computed: {
    ...mapState(useProductStore, ["getProductGetters"]),
    ...mapState(useCartStore, ["getBasketGetters"]),
    ...mapState(useProductStore, ["getFilterCategory"]),
    ...mapActions(useProductStore, ["getAllProduct"]),
  },
  methods: {
    ...mapActions(useCartStore, ["setAddBasket"]),
    ...mapState(useProductStore, ["getFavoritesState"]),
    ...mapActions(useProductStore, ["addOrRemoveFavorite"]),

    addToFavorites(product: any) {
      const favoritesStore = useProductStore();
      favoritesStore.addFavoriteProduct(product);
      toast.success("Favorilere Eklendi");
    },
    removeFromFavorites(product: any) {
      const favoritesStore = useProductStore();
      favoritesStore.removeFavoriteProduct(product);
    },

    addProduct(product: any) {
      this.setAddBasket(product);
      toast.success("Sepete Eklendi");
    },
  },

  mounted() {
    this.getAllProduct;
    this.getBasketGetters;
    this.getFilterCategory;
  },
});
</script>

<style></style>
