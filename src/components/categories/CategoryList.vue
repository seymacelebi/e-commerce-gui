<template>
  <v-row>
    <v-col v-for="category in categories" :key="category.id">
      <v-card class="mx-auto" max-width="300">
        <v-img
          :src="category.url"
          height="150px"
          @click="$router.push({ name: '/topclothes' })"
          cove
        ></v-img>
        <v-card-text> {{ category.name }} </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { useProductStore } from "../../store/productStore";
import { mapState, mapActions } from "pinia";
import axios from "axios";
export default {
  data: () => ({
    categories: [] as any,
  }),
  computed: {
    ...mapActions(useProductStore, ["getAllProduct"]),
  },
  methods: {
    // getCategoryList() {
    //   try {
    //     const categories = axios
    //       .get(" http://localhost:3000/categories")
    //       .then((response: any) => (this.categories = response.data));
    //   } catch (e) {
    //     console.log(e);
    //   }
    // },
    async getCategoryList() {
      const response = await axios.get(" http://localhost:3000/categories");
      this.categories = response.data;
    },
  },
  mounted() {
    this.getAllProduct;
    this.getCategoryList();
  },
};
</script>

<style></style>
