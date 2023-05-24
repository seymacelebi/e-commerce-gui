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
  getters: {
    getUser: (state) => {
      console.log("user");
      return state.user;
    },
  },
  actions: {
    async signIn(email: any, password: any) {
      const res = await fetch("https://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const user = await res.json();
      this.user = user;
    },
  },
});
