<template>
  <div>
    <v-toolbar dark prominent>
      <v-btn icon color="black">
        <v-icon>mdi-weather-sunny</v-icon>
      </v-btn>
      <v-toolbar-title
        @click="
          $router.push({
            name: 'HomeView',
          })
        "
        >ECommerce</v-toolbar-title
      >

      <v-spacer></v-spacer>
      <!-- <v-btn
        variant="text"
        class="ma-1 mx-0"
        stacked
        @click="searchDialogVisible = true"
      >
        <v-col class="pa-0">
          <v-icon icon="mdi-magnify" size="x-large"></v-icon>
          <v-col class="pa-0 text-caption">
            {{ $t("button.search") }}
          </v-col>
        </v-col>
      </v-btn> -->

      <!-- <v-btn @click="searchDialogVisible = true">
        <v-icon>mdi-magnify</v-icon>
      </v-btn> -->
      <!-- <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn> -->
      <v-text-field
        density="compact"
        variant="solo"
        v-model="searchText"
        label="Ürün Ara"
        append-inner-icon="mdi-magnify"
        single-line
        @click:append-inner="searchItems"
        hide-details
      ></v-text-field>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn
        icon
        @click="
          $router.push({
            name: 'CartList',
          })
        "
      >
        <v-icon>mdi-cart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon size="large">mdi-account</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import SearchDialog from "../components/dialogs/SearchDialog.vue";
import { mapActions, mapState } from "pinia";
import { useProductStore } from "../store/productStore";
import { Product } from "../models/entities/ProductDto";
import axios from "axios";
import { computed } from "vue";
export default defineComponent({
  name: "AppHeader",
  components: { SearchDialog },

  data: () => ({
    searchDialogVisible: false,
    searchText: "",
    products: [],
    searchMenuArray: [] as any,
  }),

  computed: {
    ...mapActions(useProductStore, ["getAllProduct"]),
    ...mapState(useProductStore, ["getProductGetters"]),
  },
  methods: {
    search() {
      // const filteredProducts = this.getProductGetters.filter((product: any) => {
      //   return product.name
      //     .toLowerCase()
      //     .includes(this.searchQuery.toLowerCase());
      // });
      // this.$emit("filtered-products", filteredProducts);
    },
    searchItems(): any {
      // console.log("girdi");
      // // if (this.searchText.length < 3) {
      // // 	this.index = 0;
      // // }
      // if (this.searchText.length > 0) {
      //   const fixSearchText = this.searchText
      //     .toLocaleLowerCase()
      //     .replace(/\s/g, "");
      //   return this.getProductGetters.filter((x: any) =>
      //     x.lang.toLocaleLowerCase().replace(/\s/g, "").includes(fixSearchText)
      //   );
      // }
      // console.log("girdi");
      // const filteredProducts = computed(() => {
      //   return this.getProductGetters.filter((product: any) =>
      //     product.name.toLowerCase().includes(this.searchText.toLowerCase())
      //   );
      // });
      // return this.searchText, filteredProducts;
      console.log("girdi");
      const filteredProducts = computed(() => {
        return this.getProductGetters.filter((product) =>
          product.title.toLowerCase().includes(this.searchText.toLowerCase())
        );
      });
      return {
        searchText: this.searchText,
        filteredProducts,
      };
    },
    // async searchProduct() {
    //   console.log("girdi");
    //   try {
    //     const response = await axios.get(
    //       "https://api.escuelajs.co/api/v1/products?offset=0&limit=51",
    //       {
    //         params: {
    //           search: this.searchText,
    //         },
    //       }
    //     );
    //     this.products = response.data;
    //   } catch (error) {
    //     console.error(error);
    //   }
    // },
  },
  mounted() {
    this.searchItems;
    console.log(this.searchItems, "filteredPro");
  },
});
</script>
<!-- <v-btn icon @click="searchDialogVisible = true">
        <v-icon size="x-large">mdi-magnify</v-icon>
        <search-dialog v-model="searchDialogVisible"></search-dialog>
      </v-btn> -->
