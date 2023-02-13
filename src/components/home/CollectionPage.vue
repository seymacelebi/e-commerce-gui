<template>
  <v-row justify="center" class="space px-16 pb-5">
    <v-col
      cols="12"
      xs="12"
      sm="6"
      md="4"
      v-for="collection in collections"
      :key="collection.title"
    >
      <v-card class="mx-auto rounded-xl" max-width="500" color="" flat outlined>
        <div align="center" justify="center">
          <v-img
            max-height="500"
            max-width="500"
            contain
            :src="collection.img"
          ></v-img>
        </div>

        <v-card-title primary-title class="justify-center">{{
          collection.title
        }}</v-card-title>

        <v-card-actions>
          <div class="mx-auto">
            <v-btn variant="outlined" class="ma-2 pa-2"> Sayfaya Git </v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script lang="ts">
export default {
  data: () => ({
    collections: [
      {
        img: "https://www.linkpicture.com/q/download-5_24.jpg",
        title: "Kadın",
      },
      {
        img: "https://www.linkpicture.com/q/download-2_46.jpg",
        title: "Erkek",
      },
      {
        img: "https://www.linkpicture.com/q/download-6_13.jpg",
        title: "Çocuk",
      },
    ],
  }),
};
</script>
