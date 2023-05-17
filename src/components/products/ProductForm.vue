<template>
  <v-card class="h-100 w-100">
    <v-col sm="12" md="12" lg="11" xl="10">
      <v-card elevation="0" border="false" color="transparent" class="ml-10">
        <v-card-text>
          <v-form>
            <v-col>
              <v-row>
                <v-col cols="3">
                  <v-col>
                    <v-row align="center">
                      <v-col cols="auto">
                        <h4>Ürün Görseli</h4>
                      </v-col>
                      <v-col>
                        <v-divider></v-divider>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col>
                    <v-img
                      class="bg-white mx-auto my-autoo"
                      :aspect-ratio="1"
                      cover
                      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                    >
                    </v-img>
                  </v-col>
                  <v-col class="text-center">
                    <v-file-input
                      class="d-none"
                      type="file"
                      ref="uploader"
                      accept="image/png, image/jpeg, image/bmp"
                      prepend-inner-icon="mdi-camera"
                      label="Resim"
                      variant="outlined"
                      hide-details
                      density="compact"
                      hide-input
                    ></v-file-input>
                    <v-btn color="success">
                      <v-icon left> mdi-plus </v-icon>
                      Resim
                    </v-btn>
                  </v-col>
                </v-col>

                <v-col>
                  <v-col>
                    <v-row align="center">
                      <v-col cols="auto"> Ürün Ekle</v-col>
                      <v-col>
                        <v-divider></v-divider>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col>
                    <v-row>
                      <v-col>
                        <v-text-field
                          clearable
                          label="Ürün Adı"
                          variant="outlined"
                          density="compact"
                          :rules="[(v) => !!v || 'Bu alan zorunludur!']"
                          :hide-details="false"
                        ></v-text-field>
                      </v-col>
                      <v-col>
                        <v-autocomplete
                          :menu-props="{ maxHeight: '200' }"
                          label="Kategori Adı"
                          variant="outlined"
                          :rules="[(v) => !!v || 'Bu alan zorunludur!']"
                          item-title="name"
                          item-value="id"
                          :items="categories"
                          :hide-details="false"
                          density="compact"
                          clearable
                        ></v-autocomplete>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-text-field
                          clearable
                          label="Ürün Fiyatı"
                          variant="outlined"
                          density="compact"
                          :rules="[(v) => !!v || 'Bu alan zorunludur!']"
                          :hide-details="false"
                        ></v-text-field>
                      </v-col>
                      <v-col>
                        <v-text-field
                          clearable
                          label="Ürün Miktarı"
                          variant="outlined"
                          density="compact"
                          :rules="[(v) => !!v || 'Bu alan zorunludur!']"
                          :hide-details="false"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-textarea
                        clearable
                        auto-grow
                        variant="outlined"
                        bg-color="white"
                        clear-icon="mdi-close-circle"
                        label="Ürün Açıklaması"
                        model-value="Ürün açıklaması giriniz."
                      ></v-textarea>
                    </v-row>
                  </v-col>
                </v-col>
              </v-row>
              <v-col align="end">
                <v-btn
                  type="submit"
                  variant="flat"
                  size="large"
                  color="info"
                  :loading="loading"
                  >Kaydet</v-btn
                >
              </v-col>
            </v-col>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-card>
</template>
<script lang="ts">
import { mapState } from "pinia";
import { defineComponent } from "vue";
import { useProductStore } from "../../store/productStore";
import { Product } from "../../models/entities/ProductDto";
import { Category } from "../../models/entities/CategoryDto";

export default defineComponent({
  name: "ProductForm",
  data: () => ({
    loading: false,
    categories: [] as any,
    selectedCategoryId: null,
  }),
  computed: {
    ...mapState(useProductStore, ["getProductGetters"]),
    ...mapState(useProductStore, ["getProductFilteredCategory"]),
    ...mapState(useProductStore, ["getCategoryList"]),
    filteredProducts(): Product[] {
      if (this.selectedCategoryId === null) {
        return this.getProductGetters;
      } else {
        return this.getProductGetters.filter((product: Product) => {
          return product.category.id === this.selectedCategoryId;
        });
      }
    },
    filteredCategories(): Category[] {
      const categories: Category[] = [];
      this.filteredProducts.forEach((product: Product) => {
        if (
          !categories.some((c: Category) => c.name === product.category.name)
        ) {
          categories.push(product.category);
        }
      });
      return categories;
    },
    // categoryName(): any {
    //   const categoryNames = this.filteredCategories().map(
    //     (category: any) => category.name
    //   );
    //   return categoryNames;
    // },
  },
  methods: {
    // categoryList() {
    //   this.filteredProducts.forEach((product: any) => {
    //     if (!this.categories.includes(product.category.name)) {
    //       this.categories.push(product.category.name);
    //     }
    //   });
    // },
    categoryList() {
      this.categories = this.getProductGetters.map(
        (product: any) => product.category.name
      );
      return this.categories;
    },
  },
  mounted() {
    console.log("777", this.getProductFilteredCategory);
    console.log(this.categories, "1q3");
    this.getCategoryList;
  },
});
</script>
