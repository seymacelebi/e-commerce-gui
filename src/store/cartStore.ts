import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => {
    return {
      cartContent: {},
    };
  },
  getters: {
    formattedCart() {},
  },
  actions: {
    addToCart(productId: any) {
      if (this.cartContent.hasOwnProperty(productId)) {
        this.cartContent[productId] = {
          productId,
          quantity: this.cartContent[productId].quantity + 1,
        };
      } else {
        this.cartContent[productId] = {
          productId,
          quantity: 1,
        };
      }
    },
  },
});
