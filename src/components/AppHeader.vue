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
      <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
          <span variant="plain" v-bind="props"> ÜRÜNLERİMİZ </span>
        </template>
        <v-list>
          <v-list-item
            :active="false"
            v-for="(categori, index) in filterItem"
            to="/product"
            :key="index"
            @click="filterClouds(categori.name)"
          >
            <v-list-item-title>{{ categori.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

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
  data: () => ({}),
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
});
</script>
