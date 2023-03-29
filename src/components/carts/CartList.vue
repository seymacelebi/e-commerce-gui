<template>
  <AppHeader></AppHeader>

  <v-row>
    <v-col class="mt-15"
      ><v-card
        max-width="800"
        class="ml-15 mt-10"
        v-for="(item, index) in getBasketGetters"
        :key="index"
        :value="index"
      >
        <v-card-item>
          <!-- <v-col>
            <v-img :src="item.images[0]" height="300px" cover></v-img
          ></v-col> -->
          <v-col> <v-img :src="item.image" height="300px" cover></v-img></v-col>

          <v-col>
            <div class="text-overline mb-1">{{ item.title }}</div>
            <div class="text-h6 mb-1">{{ item.price }}</div>
            <div class="text-caption">
              {{ item.description }}
            </div></v-col
          >
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import AppHeader from "../AppHeader.vue";
import { mapState, mapActions } from "pinia";
import { useCartStore } from "../../store/cartStore";

export default defineComponent({
  name: "CartList",
  data: () => ({}),
  computed: {
    ...mapState(useCartStore, ["getBasketGetters"]),
  },
  methods: {
    ...mapActions(useCartStore, ["setAddBasket"]),
  },
  components: { AppHeader },
});
</script>
