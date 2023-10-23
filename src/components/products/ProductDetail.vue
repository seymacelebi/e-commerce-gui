<template>
  <v-app>
    <AppHeader />
    <v-container fluid>
      <v-row>
        <v-col>
          <v-card>
            <v-img max-width="500" contain :src="productList.image"></v-img>
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
                  {{ productList.title }}
                </p></v-card-title
              >
            </v-card-item>

            <v-card-text>
              <div>
                <p class="text-h6 text--primary">{{ productList.price }} $</p>
              </div>
            </v-card-text>
            <v-card-text>
              <div>
                <p class="text-h6 text--primary">
                  {{ productList.description }}
                </p>
              </div>
            </v-card-text>

            <v-divider class="mx-4 mb-1"></v-divider>

            <div class="px-4">
              <v-rating
                hover
                :length="5"
                :size="32"
                :model-value="3"
                active-color="primary"
              />
            </div>

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
      productList: [] as any,
      products: inject<Product>("products"),
    };
  },

  components: { AppHeader },
  computed: {
    ...mapState(useCartStore, ["getBasketGetters"]),
    ...mapState(useProductStore, ["getProductGetters"]),
    ...mapActions(useProductStore, ["getAllProduct"]),
  },
  mounted() {
    this.getProductById();
  },
  methods: {
    ...mapActions(useCartStore, ["setAddBasket"]),
    addProduct(product: any) {
      this.setAddBasket(product);
      toast.success("Sepete Eklendi");
      console.log("ekledi", this.getBasketGetters);
    },
    async getProductById() {
      const id = +this.$route.params.id;
      const response = await fetch("https://fakestoreapi.com/products/" + id);
      const data = await response.json();
      this.productList = data;
      console.log(this.productList, "product1212");
    },
  },
  watch: {
    getProductById: {
      handler() {
        this.getProductById;
      },
    },
  },
});
</script>
