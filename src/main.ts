import { createApp } from "vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import App from "./App.vue";
import { vuetify } from "./plugins/vuetify";
import { createPinia } from "pinia";
import router from "./router";
import { appAxios } from "./utils/appAxios";
const pinia = createPinia();

const app = createApp(App);
const options = {
  timeout: 1000,
};
app.use(pinia);
app.use(router);
app.use(Toast, options);
app.provide("axios", app.config.globalProperties.axios);
// app.config.globalProperties.$appAxios = appAxios;
app.use(vuetify);
app.mount("#app");
