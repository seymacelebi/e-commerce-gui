import { defineStore } from "pinia";
import { Product } from "../models/entities/ProductDto";

const loadFromStorage = (key: string, defaultValue: any): any => {
  const item = localStorage.getItem(key);
  if (item) {
    return JSON.parse(item);
  }
  return defaultValue;
};
export const useProductStore = defineStore("products", {
  state: () => {
    return {
      totalPrice: 0,
      product: [] as Array<Product>,
      basket: [] as Array<Product>,
      basketLength: 0,
      filterCategory: [] as Array<Product>,
      favorites:loadFromStorage(
        "userFavorites", [] as Array<Product>),
      loading: false,
    };
  },
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
    getFilterCategory: (state) => {
      return state.filterCategory;
    },
    getFavoritesState(state) {
      return state.favorites;
    },
  },
  actions:{
    setAddBasket(pro: Product) {
      this.basket = [...this.basket, pro];
      this.totalPrice += pro.price;
      pro.quantity++;
    },
    addOrRemoveFavorite(pro: Product) {
      const findedIndex = this.favorites.findIndex(
        (fav: any) => fav.id === pro.id
      );
      if (findedIndex === -1) {
        this.favorites = [...this.favorites, pro];
      } else {
        this.favorites = this.favorites.filter((fav: any) => fav.id !== pro.id);
      }
      localStorage.setItem("userFavorites", JSON.stringify(this.favorites));
    },
    setLoadingState(state: boolean) {
      this.loading = state;
    },
  },
  },
  
});
