<template>
  <v-col>
    <v-row>
      <v-btn class="mx-2 mt-n3" color="green" @click="add()">
        <v-icon> mdi-shopping </v-icon>
      </v-btn>
    </v-row>
  </v-col>
</template>
<script lang="ts">
import { defineComponent } from "vue";
//models

import { mapActions, mapState } from "pinia";
import { useProductStore } from "../../store/productStore";

export default defineComponent({
  name: "buttonGroup",
  props: ["pro"],
  data() {
    return {
      basket: [],
      productStore: useProductStore(),
      open: true,
    };
  },
  computed: {
    //pinia da mapgetters yok o yuzden getter verisi olan getProduct ...mapstate ile cagırılıyor.
    ...mapState(useProductStore, ["getBasketGetters"]),
  },

  methods: {
    ...mapActions(useProductStore, ["setAddBasket"]),

    add() {
      this.setAddBasket(this.pro);
      console.log("EKLE", this.getBasketGetters);
      //pinia içerisindeki actions a parametre olarak pro yollandı.store içerisinde karşılığını buldu.
    },
  },
});
</script>
