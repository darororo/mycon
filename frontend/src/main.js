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
import "primeicons/primeicons.css";

const app = createApp(App);

// Register global components
import Button from "primevue/button";
import Avatar from "primevue/avatar";
import Popover from "primevue/popover";

app.component("Avatar", Avatar);
app.component("Popover", Popover);
app.component("Icon", Icon);
app.component("Card", Card);
app.component("Button", Button);

const MyPreset = definePreset(Aura, {
  components: {
    listbox: {
      height: "900px",
      shadow: "none",
      border: {
        color: "none",
      },
      option: {
        border: {
          radius: "20px",
        },
        color: "#333333",
        focus: {
          background: "none",
          color: "#333333",
        },
        selected: {
          background: "#333a56",
          focus: {
            background: "#333a56",
          },
        },
      },
    },
  },
});

app.use(PrimeVue, {
  theme: {
    preset: MyPreset,
  },
});

// Set up router and mount app
app.use(router);
app.mount("#app");
