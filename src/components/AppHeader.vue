<template>
  <div>
    <v-toolbar dark prominent>
      <v-btn icon color="black">
        <v-icon>mdi-weather-sunny</v-icon>
      </v-btn>
      <v-toolbar-title
        @click="
          $router.push({
            name: 'HomeView',
          })
        "
        >ECommerce</v-toolbar-title
      >

      <v-spacer></v-spacer>

      <!-- <v-text-field
        density="compact"
        variant="solo"
        v-model="searchText"
        label="Ürün Ara"
        append-inner-icon="mdi-magnify"
        single-line
        @click:append-inner="searchItems"
        hide-details
      ></v-text-field> -->

      <v-btn
        icon
        @click="
          $router.push({
            name: 'FavoriteProduct',
          })
        "
      >
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn variant="text" stacked @click="searchDialogVisible = true">
        <v-col class="pa-0">
          <v-icon icon="mdi-magnify" size="large"></v-icon>
        </v-col>
      </v-btn>
      <search-dialog v-model="searchDialogVisible"></search-dialog>
      <v-btn
        icon
        @click="
          $router.push({
            name: 'CartList',
          })
        "
      >
        <v-icon>mdi-cart</v-icon>
      </v-btn>   
      <v-btn variant="text" class="ma-1 mx-0" stacked id="menu-activator">
        <v-col class="pa-0">
          <v-avatar color="red" variant="flat" size="small"
            ><span>A</span></v-avatar
          >
          <v-menu
            v-model="openDialogLogin"
            :close-on-content-click="false"
            activator="#menu-activator"
            :open-on-click="true"
            location="bottom start"
          >
            <login-information @openDialogLogin="openDialogLogin = $event" />
          </v-menu>
        </v-col>
      </v-btn>
    </v-toolbar>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import SearchDialog from "../components/dialogs/SearchDialog.vue";
import { mapActions, mapState } from "pinia";
import { useProductStore } from "../store/productStore";
import  LoginInformation  from "../components/LoginInformation.vue"
import { computed } from "vue";
export default defineComponent({
  name: "AppHeader",
  components: { SearchDialog, LoginInformation },

  data: () => ({
    searchDialogVisible: false,
    searchText: "",
    openDialogLogin: false,
  }),

  computed: {
    ...mapActions(useProductStore, ["getAllProduct"]),
    ...mapState(useProductStore, ["getProductGetters"]),
  },
  methods: {
    searchItems(): any {
      const filteredProducts = computed(() => {
        return this.getProductGetters.filter((product) =>
          product.title.toLowerCase().includes(this.searchText.toLowerCase())
        );
      });
      return {
        searchText: this.searchText,
        filteredProducts,
      };
    },
  },
  watch: {},
  mounted() {
    this.searchItems;
  },
});
</script>
