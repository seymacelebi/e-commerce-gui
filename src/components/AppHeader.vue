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

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

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
import { mapActions, mapState } from "pinia";
import { defineComponent } from "vue";
import ProductList from "../components/products/ProductList.vue";
import { useProductStore } from "../store/productStore";
import { useCartStore } from "../store/cartStore";
export default defineComponent({
  name: "AppHeader",
  data: () => ({
    filterItem: [
      { name: "Clothess", icon: "mdi-map" },
      { name: "Electronics", icon: "mdi-map" },
      { name: "Others", icon: "mdi-tablet" },
      { name: "Shoes", icon: "mdi-table-furniture" },
      { name: "Change title", icon: "mdi-tshirt-crew-outline" },
    ],
  }),
  components: { ProductList },
  computed: {
    ...mapState(useCartStore, ["getBasketGetters", "getProductGetters"]),
  },
  methods: {
    ...mapActions(useCartStore, ["setfilter"]),
    filterClouds(catName: any) {
      this.$router.push({ name: "ProductList", path: "/product" });
      console.log("click =>", catName);
      this.setfilter(catName);
    },
  },
  mounted() {
    this.filterClouds;
    console.log(this.filterClouds, "1212");
  },
});
</script>
