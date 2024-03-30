<template>
  <AppHeader></AppHeader>
  <v-row>
    <v-col v-if="getFavoriteProduct.length === 0" class="mt-5">
      <v-alert density="compact" icon="mdi-alert-circle">
        Favori ürün bulunamadı.
      </v-alert></v-col
    >

    <v-col
      cols="12"
      class="mt-15"
      v-for="(item, index) in getFavoriteProduct"
      :key="index"
    >
      <v-card class="fill-height">
        <v-row>
          <v-col cols="12">
            <v-card color="white">
              <v-row>
                <v-col cols="4">
                  <v-avatar class="ma-3" size="200" rounded="0">
                    <v-img
                      :src="item.image"
                      class="ml-15 align-center"
                    ></v-img>
                  </v-avatar>
                </v-col>
                <v-col cols="4">
                  <v-card-title class="text-h5">
                    {{ item.title }}
                  </v-card-title>
                  <v-card-subtitle> {{ item.description }}</v-card-subtitle>
                </v-col>
                <v-col cols="4">
                  <v-btn
                    variant="outlined"
                    class="mx-auto"
                    @click="removeFavorite(item)"
                  >
                    Favorilerden Çıkar
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useProductStore } from "../store/productStore";
import { mapState, mapActions } from "pinia";
import AppHeader from "../components/AppHeader.vue";
export default defineComponent({
  name: "FavoriteProduct",
  components: { AppHeader },
  data: () => ({
    product: [] as any,
  }),
  computed: {
    ...mapState(useProductStore, ["getFavoriteProduct"]),
  },
  methods: {
    ...mapActions(useProductStore, ["removeFavoriteProduct"]),
    removeFavorite(productId: number) {
      this.removeFavoriteProduct(productId);
    },
  },
});
</script>
