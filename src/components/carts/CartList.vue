<template>
  <AppHeader></AppHeader>

  <v-row>
    <v-col
      cols="8"
      class="mt-15"
      v-for="(item, index) in getBasketGetters"
      :key="index"
    >
      <v-card class="fill-height">
        <v-row dense>
          <v-col cols="12">
            <v-card color="white">
              <v-row>
                <v-col cols="4">
                  <v-avatar class="ma-3" size="300" rounded="0">
                    <v-img :src="item.image" class="ml-15 align-center"></v-img>
                  </v-avatar>
                </v-col>
                <v-col cols="8">
                  <v-card-title class="text-h5">
                    {{ item.title }}
                  </v-card-title>
                  <v-card-subtitle> {{ item.description }}</v-card-subtitle>

                  <v-card-actions>
                    <v-btn
                      variant="outlined"
                      size="small"
                      icon="mdi-plus"
                      @click="addProduct(item)"
                    >
                    </v-btn>
                    <v-card-title> {{ item.quantity }} </v-card-title>
                    <v-btn
                      variant="outlined"
                      size="small"
                      icon="mdi-minus"
                      @click.prevent="removeProduct(item)"
                    >
                    </v-btn>
                  </v-card-actions>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-col
      cols="4"
      class="mt-15 ml-15 top-right"
      v-if="getBasketGetters.length !== 0"
    >
      <v-card class="auto ml-15" max-width="344">
        <v-card-item>
          <div>
            <div class="text-h4 mb-1">Ödeme Yap</div>

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
            @click="
              $router.push({
                name: 'PaymentForm',
              })
            "
          >
            Ödeme Yap
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col v-else cols="12" class="mt-5">
      <v-alert density="compact" icon="mdi-alert-circle">
        Sepette ürün bulunamadı.
      </v-alert></v-col
    >
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
  created() {
    // Tarayıcı hafızasından sepet verilerini yükle
    this.loadCartFromLocalStorage();
  },
  methods: {
    ...mapActions(useCartStore, ["setAddBasket", "setDeleteBasket"]),
    addProduct(product:any) {
      this.setAddBasket(product);
      product.quantity++;
      this.saveCartToLocalStorage(); // Sepet verilerini güncellemeyi unutmayın
    },
    removeProduct(productId:any) {
      this.setDeleteBasket(productId);
      this.saveCartToLocalStorage();
    },
    // addProduct(product: any) {
    //   this.setAddBasket(product);
    //   this.product.quantity++;
    //   console.log("ekledi", this.getBasketGetters);
    // },

    // removeProduct(productId: number) {
    //   this.setDeleteBasket(productId);
    // },
  },
  components: { AppHeader },
});
</script>
<style scoped>
.button-container {
  position: relative;
}

.top-right {
  position: absolute;
  top: 20;
  right: 0;
  margin: 5px;
}
</style>
