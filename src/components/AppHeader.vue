<template>
  <div>
    <v-toolbar dark prominent>
      <v-btn variant="outlined" icon color="secondary">
        <v-icon>mdi-format-list-bulleted-square</v-icon>
      </v-btn>
      <v-toolbar-title>ECommerce</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ProductList from "../components/products/ProductList.vue";
export default defineComponent({
  name: "AppHeader",
  components: { ProductList },
});
</script>
