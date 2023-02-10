<template>
  <v-row>
    <v-col v-for="category in categories" :key="category.title">
      <v-card class="mx-auto" max-width="300">
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="150px"
          cove
        ></v-img>
        <v-card-text> {{ category.title }} </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script lang="ts">
export default {
  data: () => ({
    categories: [
      { img: "01.png", title: "Dış Giyim" },
      { img: "02.png", title: "Üst Giyim" },
      { img: "3.png", title: "Alt Giyim" },
      { img: "4.png", title: "Takım" },
      { img: "5.png", title: "Elbise" },
    ],
  }),
};
</script>

<style></style>
