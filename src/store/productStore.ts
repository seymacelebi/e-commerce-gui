import { defineStore } from "pinia";
import axios from "axios";
import { Product } from "../models/entities/ProductDto";

const loadFromStorage = (key: string, defaultValue: any): any => {
  const item = localStorage.getItem(key);
  if (item) {
    return JSON.parse(item);
  }
  return defaultValue;
};

export const useProductStore = defineStore("product", {
  state: () => {
    return {
      totalPrice: 0,
      product: [] as Array<Product>,
      basket: [] as Array<Product>,
      basketLength: 0,
      loading: false,
      filterCategory: [] as Array<Product>,
      categoryFiltered: [] as any,
    };
  },

  getters: {
    getProductGetters: (state) => {
      return state.product;
    },
    getBasketGetters: (state) => {
      return state.basket;
    },
    getFilterCategory: (state) => {
      console.log(state.filterCategory, "filterenmişcategory");
      return state.filterCategory;
    },
    getBasketLength: (state) => {
      return state.basketLength;
    },
    getProductFilteredCategory: (state) => {
      console.log("categoryFiltered", state.categoryFiltered);
      return state.categoryFiltered;
    },
  },
  actions: {
    // async getProductAction() {
    //   await axios
    //     .get("https://api.escuelajs.co/api/v1/products?offset=0&limit=70")
    //     .then((product) => {
    //       this.product = product.data;
    //       console.log("productgettersgelen", product);
    //       this.product.forEach((x: any) => {
    //         x.quantity = 0;
    //       });
    //     });
    // },
    productWithFilteredCategories() {
      this.categoryFiltered = Array.from(
        new Set(this.getProductGetters.map((p) => p.category))
      );
    },
    setfilter(catName: string) {
      this.filterCategory = this.getProductGetters.filter(
        (x) => x.category.name == catName
      );
    },
    async getAllProduct() {
      // const response = await fetch('https://fakestoreapi.com/products')
      const response = await fetch(
        "https://api.escuelajs.co/api/v1/products?offset=0&limit=51"
      );

      const data = await response.json();
      this.product = data;
      this.product.forEach((x: any) => {
        x.quantity = 0;
      });
      console.log(this.product, "product");
    },
    // async getAllProduct() {
    //   const response = await fetch("https://fakestoreapi.com/products");
    //   const data = await response.json();
    //   this.product = data;
    //   console.log(this.product, "product");
    // },
  },
});
