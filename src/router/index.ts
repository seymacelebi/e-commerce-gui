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
