import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { useAuthStore } from "../store/authStore";
const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
    meta: { requiresAuth: true }, // This route requires authentication

  },
  {
    path: "/loginpage",
    name: "LoginView",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/payment",
    name: "PaymentForm",
    component: () => import("../components/payments/PaymentForm.vue"),
  },

  {
    path: "/productList",
    name: "ProductList",
    component: () => import("../components/products/ProductList.vue"),
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: () => import("../components/products/ProductDetail.vue"),
  },
  {
    path: "/productform",
    name: "ProductForm",
    component: () => import("../components/products/ProductForm.vue"),
  },
  {
    path: "/favorite",
    name: "FavoriteProduct",
    component: () => import("../components/favoriteProduct.vue"),
  },
  {
    path: "/userProfile",
    name: "UserProfile",
    component: () => import("../components/users/UserProfile.vue"),
    redirect: { name: "information" },
    children: [
      {
        path: "information",
        name: "information",
        component: () =>
          import("../components/users/userProfile/UserInformation.vue"),
      },
      {
        path: "order",
        name: "order",
        component: () =>
          import("../components/users/userProfile/UserOrder.vue"),
      },

      {
        path: "favorite",
        name: "favorite",
        component: () =>
          import("../components/users/userProfile/UserFavorite.vue"),
      },
      {
        path: "changepassword",
        name: "changepassword",
        component: () =>
          import("../components/users/userProfile/UserChangePassword.vue"),
      },
      {
        path: "adress",
        name: "adress",
        component: () =>
          import("../components/users/userProfile/UserAddress.vue"),
      },
      {
        path: "logout",
        name: "logout",
        component: () => import("../components/users/userProfile/LogOut.vue"),
      },
    ],
  },

  {
    path: "/cartList",
    name: "CartList",
    component: () => import("../components/carts/CartList.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const authToken = localStorage.getItem("authToken");

  if (to.meta.requiresAuth && !authToken) {
    // The route requires authentication, but the token is missing
    next({ name: "LoginView" }); // Redirect to the login page
  } else if (to.name === "LoginView" && authToken) {
    // Prevent logged-in users from accessing the login page
    next({ name: "HomeView" }); // Redirect to the home page
  } else {
    next(); // Continue with the navigation
  }
});


export default router;
