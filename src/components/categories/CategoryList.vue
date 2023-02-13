<template>
  <v-row>
    <v-col v-for="category in categories" :key="category.id">
      <v-card class="mx-auto" max-width="300">
        <v-img :src="category.url" height="150px" cove></v-img>
        <v-card-text> {{ category.name }} </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import axios from "axios";
export default {
  data: () => ({
    categories: [],
  }),
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
    this.getCategoryList();
  },
};
</script>

<style></style>
