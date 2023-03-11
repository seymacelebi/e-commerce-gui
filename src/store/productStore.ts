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
    };
  },

  getters: {
    getProductGetters: (state) => {
      console.log(state.product, "getters");
      return state.product;
    },
    getBasketGetters: (state) => {
      return state.basket;
    },

    getBasketLength: (state) => {
      return state.basketLength;
    },
  },
  actions: {
    async getProductAction() {
      await axios
        .get("https://api.escuelajs.co/api/v1/products?offset=0&limit=70")
        .then((product) => {
          this.product = product.data;
          console.log("productgettersgelen", product);
          this.product.forEach((x: any) => {
            x.quantity = 0;
          });
        });
    },
  },
});
