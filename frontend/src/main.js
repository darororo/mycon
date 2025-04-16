import "./assets/main.css";
import { createApp } from "vue";
import Aura from "@primevue/themes/aura";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import { Icon } from "@iconify/vue";
import router from "./router";
import Card from "primevue/card";
import Button from "primevue/button";
import { definePreset } from "@primevue/themes";

const app = createApp(App);

// Register global components
app.component("Icon", Icon);
app.component("Card", Card);
app.component("Button", Button);

// use PrimeVue with Aura theme
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});

// Set up router and mount app
app.use(router);
app.mount("#app");
