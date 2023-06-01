import { defineStore } from "pinia";
import router from "../router";
export const useUserStore = defineStore("user", {
  state: () => {
    return {
      user: {} as any,
      isAuthenticated: false,
      email: String(),
      password: String(),
      returnUrl: null,
    };
  },
  getters: {
    getUser: (state) => {
      console.log("user");
      return state.user;
    },
  },
  actions: {
    async fetchUser() {
      const res = await fetch("https://localhost:3000/user");

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
    async login(email: any, password: any) {
      try {
        const user = await fetchWrapper.post(
          `${"http://localhost:3000"}/authenticate`,
          { email, password }
        );
        // update pinia state
        this.user = user;
        // store user details and jwt in local storage to keep user logged in between page refreshes
        localStorage.setItem("user", JSON.stringify(user));
        // redirect to previous url or default to home page
        router.push(this.returnUrl || "/");
      } catch (error) {
        console.log("hata");
      }
    },
  },
});
