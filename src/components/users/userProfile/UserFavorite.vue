<template>
  <v-row v-for="(item, index) in getFavoriteProduct" :key="index">
    <v-col v-if="getFavoriteProduct.length === 0" class="mt-5">
      <v-alert density="compact" icon="mdi-alert-circle">
        Favori ürün bulunamadı.
      </v-alert></v-col
    >

    <v-col cols="8" class="mt-15">
      <v-card class="fill-height">
        <v-row>
          <v-col cols="12">
            <v-card color="white">
              <v-row>
                <v-col cols="4">
                  <v-avatar class="ma-3" size="200" rounded="0">
                    <v-img
                      :src="item.images[0]"
                      class="ml-15 align-center"
                    ></v-img>
                  </v-avatar>
                </v-col>
                <v-col cols="8">
                  <v-card-title class="text-h5">
                    {{ item.title }}
                  </v-card-title>
                  <v-card-subtitle> {{ item.description }}</v-card-subtitle>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-col cols="4">
      <v-btn variant="outlined" class="mx-auto" @click="removeFavoriteProduct">
        Favorilerden Çıkar
      </v-btn>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useProductStore } from "../../../store/productStore";
import { mapState, mapActions } from "pinia";
import AppHeader from "../../AppHeader.vue";
import { Product } from "../../../models/entities/ProductDto";
export default defineComponent({
  name: "UserFavorite",
  components: { AppHeader },
  computed: {
    ...mapState(useProductStore, ["getFavoriteProduct"]),
    removeFavoriteProduct(product: Product) {
      const index = this.getFavoriteProduct.findIndex(
        (favProduct) => favProduct.id === product.id
      );
      if (index !== -1) {
        this.getFavoriteProduct.splice(index, 1);
      }
    },
  },
});
</script>
<style scoped>
.button {
  justify-content: center;
}
</style>
