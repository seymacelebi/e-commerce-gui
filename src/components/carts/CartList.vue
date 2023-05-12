<template>
  <AppHeader></AppHeader>

  <v-row v-for="(item, index) in getBasketGetters" :key="index">
    <v-col cols="8" class="mt-15">
      <v-card color="white" theme="dark" class="ml-15 mt-10" :value="index">
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
                @click.prevent="removeProduct(item)"
              >
              </v-btn>
            </v-card-actions>
          </div>
        </div>
      </v-card>
      <v-divider></v-divider>
      <v-row>
        <v-col>
          <h3 class="d-flex flex-row-reverse mb-6 mt-4">
            Sepet Tutarı: {{ totalPrice }}
          </h3>
          <div class="d-flex flex-row-reverse mb-3">
            <v-btn
              variant="outlined"
              class="ma-2 pa-2"
              v-if="getBasketGetters.length > 0"
            >
              SATIN AL
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="4" class="mt-15">
      <v-card class="mx-auto" max-width="344">
        <v-card-item>
          <div>
            <div class="text-h4 mb-1">Checkout</div>

            <div class="text-h6 mb-1">Sepet Tutarı: {{ totalPrice }}</div>
          </div>
        </v-card-item>

        <v-card-actions>
          <v-btn
            justify="center"
            align="center"
            block
            height="6vh"
            color="info"
            class="text-h6 text-white"
            :size="buttonResponsive"
            variant="flat"
          >
            Checkout
          </v-btn>
        </v-card-actions>
      </v-card>
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
    ...mapState(useCartStore, ["GetBasketPrice"]),
    ...mapState(useCartStore, ["totalPrice"]),
    buttonResponsive(): string {
      return this.$vuetify.display.md ? "small" : "default";
    },
  },
  methods: {
    ...mapActions(useCartStore, ["setAddBasket", "setDeleteBasket"]),

    addProduct(product: any) {
      this.setAddBasket(product);
      this.product.quantity++;
      console.log("ekledi", this.getBasketGetters);
    },

    removeProduct(productId: number) {
      this.setDeleteBasket(productId);
    },
  },
  components: { AppHeader },
});
</script>
