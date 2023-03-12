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

export const useCartStore = defineStore("cart", {
  //burada içi boş verisi olamayan  ama type tanımlanan product var bunu için product model belirledim.api den gelecke olan verilerin type ı bu model içeriisnde belirlendi.
  state: () => {
    return {
      totalPrice: 0,
      product: [] as Array<Product>,
      basket: [] as Array<Product>,
      basketLength: 0,
      filterCategory: [] as Array<Product>,
      favorites: loadFromStorage("userFavorites", [] as Array<Product>),
      loading: false,
    };
  },

  //actions da içerisine api verileri atanan product ı getters da bir func atadım.computed da cagırdım.
  getters: {
    getProductGetters: (state) => {
      console.log(state.product, "getters");
      return state.product;
    },
    getBasketGetters: (state) => {
      console.log("oldu")
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
  actions: {
    setfilter(catId: number) {
      this.filterCategory = this.getProductGetters.filter(
        (x) => x.categoryId == catId
      );
      console.log("actions girdi");
    },
    setAddBasket(pro: Product) {
      this.basket = [...this.basket, pro];
      this.totalPrice += pro.price;
      pro.quantity++;
    },
  
    addOrRemoveFavorite(pro: Product) {
      const findedIndex = this.favorites.findIndex(
        (fav: any) => fav.id === pro.productId
      );
      if (findedIndex === -1) {
        this.favorites = [...this.favorites, pro];
      } else {
        this.favorites = this.favorites.filter((fav: any) => fav.id !== pro.productId);
      }
      localStorage.setItem("userFavorites", JSON.stringify(this.favorites));
    },
    setLoadingState(state: boolean) {
      this.loading = state;
    },
  },
});
