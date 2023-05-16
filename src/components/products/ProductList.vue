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
          <!-- 
          <v-btn icon @click.stop="addFavorite(product)" variant="plain">
            <v-icon :icon="checkFavIcon(product)" color="info"></v-icon>
          </v-btn> -->
          <v-btn @click="addToFavorites(product)">
            <v-icon> mdi-heart </v-icon></v-btn
          >
          <!-- <v-btn @click="removeFromFavorites(product)"></v-btn>
            <v-icon> mdi-shopping </v-icon></v-btn
          > -->

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
import { FavoriteObjectType } from "../../models/types";
export default defineComponent({
  name: "ProductList",
  data: () => ({
    products: [] as any,
    data: String(),
    selectedCategory: null,
    titleObjectItem: {} as any,
  }),

  computed: {
    ...mapState(useProductStore, ["getProductGetters"]),
    ...mapState(useCartStore, ["getBasketGetters"]),
    ...mapState(useProductStore, ["getFilterCategory"]),
    ...mapActions(useProductStore, ["getAllProduct"]),
  },
  methods: {
    addToFavorites(product: any) {
      const favoritesStore = useProductStore();
      favoritesStore.addFavoriteProduct(product);
    },
    removeFromFavorites(product: any) {
      const favoritesStore = useProductStore();
      favoritesStore.removeFavoriteProduct(product);
    },
    ...mapActions(useCartStore, ["setAddBasket"]),
    ...mapState(useProductStore, ["getProductFilteredCategory"]),
    ...mapState(useProductStore, ["getFavoritesState"]),
    addProduct(product: any) {
      this.setAddBasket(product);
      toast.success("Sepete Eklendi");
      console.log("ekledi", this.getBasketGetters);
    },
    addFavorite(child: FavoriteObjectType) {
      this.addOrRemoveFavorite(child);
    },

    checkFavIcon(child: FavoriteObjectType): string {
      const favorites = this.getFavoritesState(); // getFavoritesState fonksiyonunu çağırarak favorileri al

      const findIndex = favorites.findIndex((fav) => fav.name === child.name);
      if (findIndex === -1) {
        return "mdi-star-outline";
      } else {
        return "mdi-star";
      }
    },
    ...mapActions(useProductStore, ["addOrRemoveFavorite"]),
  },

  mounted() {
    this.getAllProduct;
    this.getProductFilteredCategory;
    this.getBasketGetters;
    this.getFilterCategory;
  },
  watch: {},
});
</script>

<style></style>
