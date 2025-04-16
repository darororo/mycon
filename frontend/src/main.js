import "./assets/main.css";
import { createApp } from "vue";
import Aura from "@primevue/themes/aura";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import { Icon } from "@iconify/vue";
import { definePreset } from "@primevue/themes";

const app = createApp(App);
app.component("Icon", Icon);


app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.mount("#app");

