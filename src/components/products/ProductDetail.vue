<template>
  <v-app>
    <AppHeader />
    <v-container fluid>
      <v-row v-for="(product, index) in dataId" :key="index">
        <v-col>
          <v-card>
            <v-carousel>
              <v-carousel-item v-for="(item, i) in product.images" :key="i">
                <v-card>
                  <v-img :src="item"></v-img>
                </v-card>
              </v-carousel-item>
            </v-carousel>
            <!-- <div align="center" justify="center">
              <v-img max-width="800" contain :src="product.images[0]"></v-img>
            </div> -->

            <!-- <v-card-title primary-title class="mx-auto">{{
              product.title
            }}</v-card-title> -->
            <v-card-actions> </v-card-actions>
          </v-card>
        </v-col>
        <v-col>
          <v-card>
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
                <p class="text-h6 text--primary">{{ product.price }} $</p>
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
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script lang="ts">
import { useToast } from "vue-toastification";
const toast = useToast();
import { useProductStore } from "../../store/productStore";
import { mapState, mapActions } from "pinia";
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
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
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
      toast.success("Sepete Eklendi");
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
