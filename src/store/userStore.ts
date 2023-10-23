import { defineStore } from "pinia";
import router from "../router";
export const useUserStore = defineStore("user", {
  state: () => {
    return {
      user: null as any,
      isAuthenticated: false,
      email: String(),
      password: String(),
      returnUrl: null,
    };
  },
  getters: {
    getUser: (state) => {
      console.log(state, "stateuser")
      return state.user;
      
    },
  },
  actions: {
    async fetchUser() {
      const res = await fetch("https://fakestoreapi.com/users");

      const user = await res.json();
      this.user = user;
    },
    async signUp(email: any, password: any) {
      const res = await fetch("https://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const user = await res.json();
      this.user = user;
    },
    async signIn(email: any, password: any) {
      const res = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const user = await res.json();
      this.user = user;
    },
    async login(username: any, password: any) {
      try {
        const response = await fetch("https://fakestoreapi.com/auth/login", {
          method: "POST",
          body: JSON.stringify({
            username,
            password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();

        if (response.status === 200) {
          this.user = data.user;
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(user));        
            console.log(data);
        } else {
          this.user = null;
        }
      } catch (error) {
        this.user = null;
      }
    },
  },
});
