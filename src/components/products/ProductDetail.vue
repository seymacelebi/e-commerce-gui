<template>
  <v-app>
    <AppHeader />
    <v-container fluid>
      <v-row v-for="(product, index) in dataId" :key="index">
        <v-col cols="6">
          <v-card class="ml-15 mt-10 rounded-xl" max-width="500" flat outlined>
            <div align="center" justify="center">
              <v-img max-width="800" contain :src="product.images[0]"></v-img>
            </div>

            <!-- <v-card-title primary-title class="mx-auto">{{
              product.title
            }}</v-card-title> -->
            <v-card-actions> </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card class="my-12 mr-15" max-width="600">
            <template v-slot:loader="{ isActive }">
              <v-progress-linear
                :active="isActive"
                color="deep-purple"
                height="4"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-card-item>
              <v-card-title>
                <p class="text-h4 text--primary">
                  {{ product.title }}
                </p></v-card-title
              >
            </v-card-item>

            <v-card-text>
              <div>
                <p class="text-h6 text--primary">
                  {{ product.price }}
                </p>
              </div>
            </v-card-text>
            <v-card-text>
              <div>
                <p class="text-h6 text--primary">
                  {{ product.description }}
                </p>
              </div>
            </v-card-text>

            <v-divider class="mx-4 mb-1"></v-divider>

            <div class="px-4"></div>

            <v-card-actions>
              <v-btn
                variant="tonal"
                color="success"
                @click="addProduct(product)"
              >
                <v-icon> mdi-shopping </v-icon> Sepete Ekle
              </v-btn>
            </v-card-actions>
          </v-card>
          <!-- <v-card max-width="600">
            <v-card-item>
              <div>
                <v-card-text class="pb-0">
                  <p>
                    {{ product.description }}
                  </p>
                </v-card-text>
              </div>
            </v-card-item>
          </v-card> -->
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script lang="ts">
import { useProductStore } from "../../store/productStore";
import { mapState, mapActions } from "pinia";
import axios from "axios";
import { defineComponent, inject } from "vue";
import AppHeader from "../AppHeader.vue";
import { Product } from "../../models/entities/ProductDto";
import { useCartStore } from "../../store/cartStore";
export default defineComponent({
  name: "ProductDetail",
  data() {
    return {
      product: [] as any,
      dataId: {},
      products: inject<Product>("products"),
    };
  },

  components: { AppHeader },
  mounted() {
    // this.getProductById();
  },
  computed: {
    ...mapState(useCartStore, ["getBasketGetters"]),
    ...mapState(useProductStore, ["getProductGetters"]),
    ...mapActions(useProductStore, ["getAllProduct"]),
    getProductById(): Object {
      return (this.dataId = this.getProductGetters.filter(
        (x: any) => x.id === Number(this.$route.params.id)
      ));
    },
  },
  methods: {
    ...mapActions(useCartStore, ["setAddBasket"]),
    addProduct(product: any) {
      this.setAddBasket(product);
      console.log("ekledi", this.getBasketGetters);
    },
    // getProductListById() {
    //   const id = +this.$route.params.id;
    //   axios
    //     .get("http://localhost:3000/products/" + id)
    //     .then((res: any) => {
    //       this.product = res.data[0] || [];
    //     });
    // },
    // async getProductById() {
    //   const id = +this.$route.params.id;
    //   const response = await fetch(
    //     "https://api.escuelajs.co/api/v1/products?offset=0&limit=70" + id
    //   );
    //   const data = await response.json();
    //   this.product = data;
    //   console.log(this.product, "product");
    // },
    getProductById() {
      this.dataId = this.getProductGetters.filter(
        (x: any) => x.id === Number(this.$route.params.id)
      );
    },
  },
  watch: {
    getProductById: {
      handler() {
        this.getProductById;
        console.log("DETAY", this.getProductById);
      },
    },
  },
});
</script>
