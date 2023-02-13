import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
    children: [
      {
        path: "/TopClothesList",
        name: "TopClothesList",
        component: () => import("../components/products/TopClothesList.vue"),
      },
    ],
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
