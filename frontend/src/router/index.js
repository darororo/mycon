import { createRouter, createWebHistory } from "vue-router";
import Authentication from "@/views/Authentication.vue";
import userProfile from "@/views/userProfile.vue";

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
  {
    path: '/',
    name: 'Home',
    component: userProfile // or any other default component
  },
  {
    name: "userProfileDropdown",
    path: "/userProfileDropdown",
    component: userProfile,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
