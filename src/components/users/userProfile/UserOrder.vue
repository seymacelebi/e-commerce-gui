<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-card class="fill-height pa-0">
        <v-container>
          <v-row dense>
            <v-col cols="12">
              <v-card color="white">
                <v-card-title class="text-h5">
                  Sipariş Numarası : 10253
                </v-card-title>
                <v-avatar class="ma-3" size="125" rounded="0">
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                  ></v-img>
                </v-avatar>

                <v-card-actions>
                  <v-btn variant="outlined" class="top-right">
                    Siparişi Görüntüle
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>

            <v-col cols="12">
              <v-card color="white">
                <div class="d-flex flex-no-wrap justify-space-between">
                  <div>
                    <v-card-title class="text-h5">
                      Sipariş Numarası : 10251
                    </v-card-title>

                    <v-avatar class="ma-3" size="125" rounded="0">
                      <v-img
                        src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                      ></v-img>
                    </v-avatar>

                    <v-card-actions>
                      <v-btn variant="outlined" class="top-right">
                        Siparişi Görüntüle
                      </v-btn>
                    </v-card-actions>
                  </div>
                </div>
              </v-card>
            </v-col>

            <v-col cols="12">
              <v-card color="white">
                <div class="d-flex flex-no-wrap justify-space-between">
                  <div>
                    <v-card-title class="text-h5">
                      Sipariş Numarası : 10257
                    </v-card-title>

                    <v-avatar class="ma-3" size="125" rounded="0">
                      <v-img
                        src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                      ></v-img>
                    </v-avatar>

                    <v-card-actions>
                      <v-btn variant="outlined" class="top-right">
                        Siparişi Görüntüle
                      </v-btn>
                    </v-card-actions>
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UserOrder",
});
</script>
<style scoped>
.button-container {
  position: relative;
}

.top-right {
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
}
</style>
