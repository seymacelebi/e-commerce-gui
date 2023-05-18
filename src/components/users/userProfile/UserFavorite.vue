<template>
  <v-row>
    <v-col v-if="getFavoriteProduct.length === 0" class="mt-5">
      <v-alert density="compact" icon="mdi-alert-circle">
        Favori ürün bulunamadı.
      </v-alert></v-col
    >

    <v-col
      cols="12"
      class="mt-15"
      v-for="(item, index) in getFavoriteProduct"
      :key="index"
    >
      <v-card class="fill-height">
        <v-row>
          <v-col cols="12">
            <v-card color="white">
              <v-row>
                <v-col cols="4">
                  <v-avatar class="ma-3" size="200" rounded="0">
                    <v-img
                      :src="item.images[0]"
                      class="ml-15 align-center"
                    ></v-img>
                  </v-avatar>
                </v-col>
                <v-col cols="8">
                  <v-card-title class="text-h5">
                    {{ item.title }}
                  </v-card-title>
                  <v-card-subtitle> {{ item.description }}</v-card-subtitle>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
  <!-- <v-row
    justify="center"
    v-for="(item, index) in getFavoriteProduct"
    :key="index"
  >
    <v-col cols="12" class="fill-height pa-0">
      <v-card color="white" theme="dark" class="ml-15 mt-10" :value="index">
        <div class="d-flex flex-no-wrap justify-space-between">
          <v-avatar class="ma-3" size="125" rounded="0">
            <v-img :src="item.images[0]"></v-img>
          </v-avatar>
          <div>
            <v-card-title class="text-h5"> {{ item.title }} </v-card-title>

            <v-card-title>{{ item.price }} $</v-card-title>
            <v-card-subtitle> {{ item.description }}</v-card-subtitle>
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row> -->
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useProductStore } from "../../../store/productStore";
import { mapState, mapActions } from "pinia";
import AppHeader from "../../AppHeader.vue";
export default defineComponent({
  name: "UserFavorite",
  components: { AppHeader },
  computed: {
    ...mapState(useProductStore, ["getFavoriteProduct"]),
  },
});
</script>
