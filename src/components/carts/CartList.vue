<template>
  <AppHeader></AppHeader>

  <v-row>
    <v-col cols="6" class="mt-15">
      <v-card
        color="white"
        theme="dark"
        class="ml-15 mt-10"
        v-for="(item, index) in getBasketGetters"
        :key="index"
        :value="index"
      >
        <div class="d-flex flex-no-wrap justify-space-between">
          <v-avatar class="ma-3" size="125" rounded="0">
            <v-img :src="item.images[0]"></v-img>
          </v-avatar>
          <div>
            <v-card-title class="text-h5"> {{ item.title }} </v-card-title>

            <v-card-title>{{ item.price }} $</v-card-title>
            <v-card-subtitle> {{ item.description }}</v-card-subtitle>

            <v-card-actions>
              <v-btn
                variant="outlined"
                size="small"
                icon="mdi-plus"
                @click="addProduct(item)"
              >
              </v-btn>
              <v-card-title> {{ item.quantity + 1 }} </v-card-title>
              <v-btn
                variant="outlined"
                size="small"
                icon="mdi-minus"
                @click.prevent="deleteProduct()"
              >
              </v-btn>
            </v-card-actions>
          </div>
        </div>
      </v-card>
      <v-divider></v-divider>
      <div class="d-flex flex-row-reverse mb-6">
        <v-btn variant="outlined" class="ma-2 pa-2"> SATIN AL </v-btn>
      </div>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import AppHeader from "../AppHeader.vue";
import { mapState, mapActions } from "pinia";
import { useCartStore } from "../../store/cartStore";

export default defineComponent({
  name: "CartList",
  data: () => ({
    products: [] as any,
  }),
  computed: {
    ...mapState(useCartStore, ["getBasketGetters"]),
  },
  methods: {
    ...mapActions(useCartStore, ["setAddBasket", "setDeleteBasket"]),

    addProduct(product: any) {
      this.setAddBasket(product);
      this.product.quantity++;
      console.log("ekledi", this.getBasketGetters);
    },

    deleteProduct() {
      this.setDeleteBasket(this.pro);
      console.log("deneme");
      console.log("silindi", this.pro);
    },
  },
  components: { AppHeader },
});
</script>
