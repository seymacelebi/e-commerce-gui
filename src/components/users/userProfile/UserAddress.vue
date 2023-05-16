<template>
  <h4>Henüz bir teslimat adresi eklemediniz.</h4>
  <br />
  <v-dialog v-model="dialog" persistent width="1024">
    <template v-slot:activator="{ props }">
      <v-btn color="white" class="ma-2" v-bind="props"> Adres Ekle </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5"> Yeni Adres Ekle</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field label="Adres Başlığı*" required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field label="İsim*" required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field label="Soyisim*" required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field label="Email*" required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field label="Telefon Numarası*" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea label="Adres*" auto-grow required></v-textarea>
            </v-col>
            <v-col cols="12" sm="6">
              <v-select
                :items="['0-17', '18-29', '30-54', '54+']"
                label="Ülke*"
                required
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6">
              <v-select
                :items="['0-17', '18-29', '30-54', '54+']"
                label="Şehir*"
                required
              ></v-select>
            </v-col>
            <!-- <v-col cols="12" sm="6">
              <v-text-field label="Posta Kodu*" required></v-text-field>
            </v-col> -->
          </v-row>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
          Close
        </v-btn>
        <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UserAddress",
  data: () => ({
    dialog: false,
  }),
});
</script>
