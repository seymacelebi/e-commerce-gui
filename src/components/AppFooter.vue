<template>
  <v-footer dark class="d-flex flex-column" max-height="300px">
  <v-card flat  class="black white--text py-12 px-5" width="100%">
      <v-row>
        <v-col cols="12" xs="12" sm="6" md="4" class="pa-16">
          <v-toolbar color="transparent" flat>
            <v-badge color="#D5F0DB" dot>
              <!-- <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" contain width="30"></v-img> -->
            </v-badge>

            <v-toolbar-title class="ml-4">
              <span class="green--text">E</span><strong>Commerce</strong>
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text class="pt-0">
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-1 white--text"
              icon
              fab
              outlined
              small
            >
              <v-icon size="20px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="2">
          <!-- <v-card-text class="white--text pt-0">
            <h3>About</h3>
          </v-card-text> -->
          <!-- <v-card-text class="grey--text"> How it Work</v-card-text>
          <v-card-text class="grey--text mt-n4"> Our Promrams </v-card-text>
          <v-card-text class="grey--text mt-n4"> Promotions </v-card-text>
          <v-card-text class="grey--text mt-n4"> Refer A Friend </v-card-text> -->
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="2">
          <!-- <v-card-text class="white--text pt-0">
            <h3>Dellvery</h3>
          </v-card-text>
          <v-card-text class="grey--text"> Cost on Delevery </v-card-text>
          <v-card-text class="grey--text mt-n4"> Payment Method </v-card-text>
          <v-card-text class="grey--text mt-n4"> Delevery Astus </v-card-text>
          <v-card-text class="grey--text mt-n4"> Returns </v-card-text> -->
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="4">
          <v-card-text class="white--text pt-0">
            <h3>İletişim</h3>
          </v-card-text>
          <v-card-text class="grey--text"> Küçükyalı /Maltepe </v-card-text>
          <v-card-text class="grey--text mt-n4">
           Aydınevler, İnönü Cd. No:20, 34854 Maltepe/İstanbul
          </v-card-text>
          <v-card-text class="grey--text mt-n4"> https://www.intimeinfo.com.tr/</v-card-text>
          <v-card-text class="grey--text mt-n4"> -B8254552214 </v-card-text>
        </v-col>
      </v-row>
    </v-card>

    <div class="px-4 py-2 bg-white text-center w-100">
      {{ new Date().getFullYear() }} — <strong>ECommerce - Tüm hakları saklıdır.</strong>
    </div>
  </v-footer>
</template>
<script lang="ts">
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>
