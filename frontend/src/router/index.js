import { createRouter, createWebHistory } from "vue-router";
import Authentication from "@/views/Authentication.vue";

const routes = [
  {
    name: "login",
    path: "/login",
    component: Authentication,
    props: { isLogin: true },
  },
  {
    name: "signup",
    path: "/signup",
    component: Authentication,
    props: { isLogin: false },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
