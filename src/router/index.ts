import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginPage from "../views/LoginPage.vue";
import AboutView from "../views/AboutView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
