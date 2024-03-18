import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import router from "../router";

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      isLoggedIn: false,
      user: null as any,
      employeeId: 0 as any,
    };
  },
  getters: {
    getEmployeeId(state) {
      return state.employeeId;
    },
  },
  actions: {
    async login(username: string, password: string) {
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

        if (response.ok) {
          console.log(response, "res");
          const json = await response.json();
          this.isLoggedIn = true;
          this.user = {
            username: json.username,
          };
          router.push({
            name: "HomeView",
          });
          localStorage.setItem("authToken", json.token);
        } else {
          throw new Error("Giriş başarısız. Lütfen tekrar deneyin.");
        }
      } catch (error) {
        console.error("Giriş hatası:", error);
        throw error;
      }
    },
    logout() {
      this.isLoggedIn = false;
      this.user = null;
      localStorage.removeItem("authToken");
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      router.push({
        name: "LoginView",
      });
    },
    setEmployeeId(newSelectedEmployeeId: any) {
      this.employeeId = newSelectedEmployeeId;
    },
  },
});
