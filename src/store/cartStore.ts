import { defineStore } from "pinia";

export interface BasketObjectType {
  name: string;
  icon: string;
}
const loadFromStorage = (key: string, defaultValue: any): any => {
  const item = localStorage.getItem(key);
  if (item) {
    return JSON.parse(item);
  }
  return defaultValue;
};
export const useCartStore = defineStore("cart", {
  state: () => {
    return {
      baskets: loadFromStorage(
        "userBaskets",
        [] as BasketObjectType[]
      ) as BasketObjectType[],
    };
  },
  getters: {
    getBasketsState(state) {
      return state.baskets;
    },
  },
  actions: {
    addOrRemoveBasket(newFav: BasketObjectType) {
      const findedIndex = this.baskets.findIndex(
        (fav) => fav.name === newFav.name
      );
      if (findedIndex == -1) {
        this.baskets.push(newFav);
        console.log(this.baskets, "BASKETS");
      } else {
        this.baskets = this.baskets.filter((fav) => fav.name !== newFav.name);
      }
      localStorage.setItem("userBaskets", JSON.stringify(this.baskets));
      console.log(this.baskets, "sss");
    },
  },
});
