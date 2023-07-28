<template>
  <v-card class="overflow-hidden elevation-0" :border="false">
    <template v-slot:append>
      <v-btn
        v-if="tab === 'careerhistory' || tab === 'experiences'"
        variant="flat"
        prepend-icon="mdi-plus-circle"
        color="humanresources"
        @click="
          tab === 'careerhistory'
            ? (isDialogOpen = true)
            : //check
            tab === 'experiences'
            ? (isDialog = true)
            : ''
        "
      >
        {{ $t("button.add") }}
      </v-btn>
      <v-btn
        v-if="tab === 'careerhistory' || tab === 'experiences'"
        icon
        @click.capture="
          tab === 'careerhistory'
            ? (isIcon = !isIcon)
            : (isIconExp = !isIconExp)
        "
        variant="plain"
      >
      </v-btn>
    </template>
    <template v-slot:title>
      <v-tabs v-model="tab" class="mt-1" :hide-slider="true">
        <v-tab
          value="brevity"
          variant="flat"
          prepend-icon="mdi-content-paste"
          density="comfortable"
          class="rounded me-2"
          >aa</v-tab
        >
        <v-tab
          value="careerhistory"
          variant="flat"
          prepend-icon="mdi-details"
          density="comfortable"
          class="rounded me-2"
          >bb</v-tab
        >
        <v-tab
          value="experiences"
          variant="flat"
          prepend-icon="mdi-card-account-details"
          density="comfortable"
          class="rounded me-2"
          >cc</v-tab
        >
      </v-tabs>
    </template>
    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="brevity">
          <v-row>
            <v-col>
              <v-card
                width="50%"
                :border="true"
                elevation="0"
                color="background"
              >
                <v-card-text>
                  <v-col>
                    <v-form validate-on="submit">
                      <v-row>
                        <v-col cols="6">
                          <v-text-field label="Label"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                          <v-text-field label="Label"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                          <v-text-field label="Label"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                          <v-text-field label="Label"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                          <v-text-field label="Label"></v-text-field>
                          <v-text-field label="Label"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                          <v-text-field label="Label"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                          <v-text-field label="Label"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                          <v-text-field label="Label"></v-text-field>
                        </v-col>

                        <v-col cols="6">
                          <v-text-field label="Label"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                          <v-text-field label="Label"></v-text-field>
                        </v-col>

                        <v-col cols="6">
                          <v-text-field label="Label"></v-text-field>

                          <v-text-field label="Label"></v-text-field>
                        </v-col>
                      </v-row>
                    </v-form>
                  </v-col>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-window-item>
        <v-window-item value="careerhistory">
          <v-col class="px-0 mt-4"> </v-col>
          <v-col class="px-0 mt-4"> </v-col>
          <v-col class="px-0 mt-4">
            <v-row>
              <v-col sm="12" md="6" lg="6" xl="4">
                <v-card color="background" class="fill-height" elevation="0">
                  <v-toolbar color="humanresources">
                    <v-col cols="auto">
                      <v-icon
                        size="x-large"
                        color="white"
                        icon="mdi-chart-line-variant"
                      ></v-icon>
                    </v-col>
                    <v-col class="text-white">
                      <v-toolbar-title>{{ ff }}</v-toolbar-title>
                    </v-col>
                    <v-col align="end">
                      <v-btn
                        color="white"
                        size="small"
                        icon="mdi-trash-can-outline"
                      ></v-btn>
                    </v-col>
                  </v-toolbar>
                  <v-card-text>
                    <v-row>
                      <v-col>
                        <v-text-field
                          readonly
                          :label="$t('hr.post.companyname')"
                          v-model="item.companyName"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-text-field label="Label"></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-text-field label="Label"></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-text-field label="Label"></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field label="Label"></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12"> </v-col>
                      <v-col cols="12">
                        <v-row>
                          <v-col cols="6">
                            <v-text-field label="Label"></v-text-field>
                          </v-col>
                          <v-col cols="6">
                            <v-text-field label="Label"></v-text-field>
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-window-item>
        <v-window-item value="experiences">
          <v-col class="px-0 mt-4"> </v-col>
          <v-col class="px-0 mt-4"> </v-col>
          <v-col class="px-0 mt-4">
            <v-row>
              <v-col sm="12" md="6" lg="6" xl="4">
                <v-card class="mx-auto" width="400" prepend-icon="mdi-home">
                  <template v-slot:title> This is a title </template>

                  <v-card-text> This is content </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PaymentForm",
  data: () => ({}),
});
</script>
