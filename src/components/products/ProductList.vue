<template>
  <v-row justify="center" class="space px-16">
    <v-col
      cols="12"
      xs="12"
      sm="6"
      md="4"
      v-for="product in products"
      :key="product.title"
    >
      <v-card class="mx-auto" max-width="400">
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="300px"
          cover
        ></v-img>

        <v-card-title> {{ product.title }} </v-card-title>

        <v-card-subtitle>{{ product.description }} </v-card-subtitle>

        <v-card-actions>
          <v-btn outlined class="mt-n2 add">
            <v-icon color="green" variant="outlined"> mdi-minus </v-icon>
          </v-btn>
          <v-btn outlined class="mt-n2 add">
            <v-icon color="green" variant="outlined"> mdi-plus </v-icon>
          </v-btn>

          <v-spacer></v-spacer>
          <v-btn class="mx-2 mt-n3" fab dark small color="green">
            <v-icon dark> mdi-shopping </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script lang="ts">
export default {
  data: () => ({
    products: [
      {
        img: "pr1.png",
        title: "Cabbage",
        description: "Açıklama",
        price: "$13",
      },
      {
        img: "pr2.png",
        title: "Perry's Ice Cream",
        description: "Açıklama",
        price: "$23",
      },
      {
        img: "pr3.png",
        title: "Potato",
        description: "Açıklama",
        price: "$17",
      },
      {
        img: "pr4.png",
        title: "Bundle Pack",
        description: "Açıklama",
        price: "$40",
      },
      {
        img: "pr5.png",
        title: "Oreo Biscuit",
        description: "Açıklama",
        price: "$20",
      },
      {
        img: "pr6.png",
        title: "Papaya",
        description: "Açıklama",
        price: "$10",
      },
    ],
  }),
};
</script>

<style></style>
