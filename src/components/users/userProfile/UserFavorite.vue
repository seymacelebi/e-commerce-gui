<template>
  <v-row
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
  </v-row>
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
