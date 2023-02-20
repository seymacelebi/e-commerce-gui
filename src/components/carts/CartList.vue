<template>
  <AppHeader></AppHeader>
  <v-row>
    <v-col
      ><v-card
        max-width="800"
        class="ml-15 mt-10"
        v-for="(item, index) in getBasketsState"
        :key="index"
        :value="index"
      >
        <v-card-item>
          <div>
            <div class="text-overline mb-1">{{ item.name }}</div>
            <div class="text-h6 mb-1">Headline</div>
            <div class="text-caption">
              Greyhound divisely hello coldly fonwderfully
            </div>
          </div>
        </v-card-item>

        <v-card-actions>
          <v-btn variant="outlined"> Button </v-btn>
        </v-card-actions>
      </v-card></v-col
    >
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
    ...mapState(useCartStore, ["getBasketsState"]),
  },
  methods: {
    ...mapActions(useCartStore, ["addOrRemoveBasket"]),
  },
  components: { AppHeader },
});
</script>
