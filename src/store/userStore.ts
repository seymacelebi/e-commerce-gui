import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      user: null,
      isAuthenticated: false,
      email: String(),
      password: String(),
    };
  },
  getters: {},
  actions: {},
});
