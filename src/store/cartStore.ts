import { defineStore } from "pinia";
import axios from "axios";
import { Product } from "../models/entities/ProductDto";
import { FavoriteObjectType } from "../models/types";

const loadFromStorage = (key: string, defaultValue: any): any => {
  const item = localStorage.getItem(key);
  if (item) {
    return JSON.parse(item);
  }
  return defaultValue;
};

export const useCartStore = defineStore("cart", {
  //burada içi boş verisi olamayan  ama type tanımlanan product var bunu için product model belirledim.api den gelecke olan verilerin type ı bu model içeriisnde belirlendi.
  state: () => {
    return {
      totalPrice: 0,
      product: [] as Array<Product>,
      basket: [] as Array<Product>,
      basketLength: 0,
      loading: false,
      totalItems: 0,
    };
  },

  //actions da içerisine api verileri atanan product ı getters da bir func atadım.computed da cagırdım.
  getters: {
    getProductGetters: (state) => {
      return state.product;
    },
    getBasketGetters: (state) => {
      return state.basket;
    },
    GetBasketPrice: (state) => {
      return state.totalPrice.toFixed(2);
    },
    getBasketLength: (state) => {
      return state.basketLength;
    },
    totalPrice(): number {
      return this.basket.reduce(
        (totalPrice, item) => totalPrice + item.price * item.quantity,
        0
      );
    },
  },
  actions: {
    setAddBasket(product: Product) {
      const existingItem = this.basket.find((i: any) => i.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
        console.log(existingItem, "existingItem");
      } else {
        this.basket.push({ ...product, quantity: 1 });
      }
      this.totalItems++;
    },

    setDeleteBasket(product: Product) {
      const existingItem = this.basket.find((i: any) => i.id === product.id);
      if (existingItem?.quantity !== 0) {
        console.log("23", existingItem);
        existingItem.quantity--;
      } else {
        console.log(this.product, "product");
        this.basket.pop();
      }
    },

    setLoadingState(state: boolean) {
      this.loading = state;
    },
  },
});
