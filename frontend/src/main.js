import "./assets/main.css";
import { createApp } from "vue";
import Aura from "@primevue/themes/aura";
import App from "./App.vue";
import PrimeVue from "primevue/config";

createApp(App).mount("#app");
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
