import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TopClothesList from "../components/products/TopClothesList.vue";
const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },

  {
    path: "/productList",
    name: "ProductList",
    component: () => import("../components/products/ProductList.vue"),
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
    path: "/detail/:id",
    name: "Detail",
    component: () => import("../components/products/ProductDetail.vue"),
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

export default router;
