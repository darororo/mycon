import { createRouter, createWebHistory } from "vue-router";
import Authentication from "@/views/Authentication.vue";

const routes = [
  {
    path: "/Authentication/",
    name: "Authentication",
    component: Authentication,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
