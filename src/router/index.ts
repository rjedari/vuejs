import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginPage from "../views/LoginPage.vue";
import AboutView from "../views/AboutView.vue";
import RootPage from "../views/RootPage.vue";
import UsersView from "../views/UsersView.vue"
import StaticsView from "../views/StaticsView.vue"


Vue.use(VueRouter);
export interface RoutMetaData{
  meta:{
    icon:string,
    visible:boolean,
    title:string,
  }
}

const routes: Array<RouteConfig&RoutMetaData> = [
  
  {
    path: "/",
    name: "Root",
    component: RootPage,
    meta:{
      icon:'', 
      visible:false,
      title:'', 
     
    }
  },
  
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
    meta:{
      icon:'mdi-login',
      visible:true,
      title:'LOGIN',
    }
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
    meta:{
      icon:' mdi-information-outline ',
      visible:true,
      title:'ABOUT',
    }
  },
  {
    path: "/home",
    name: "Home",
    component: HomeView,
    meta:{
      icon:'mdi-home ',
      visible:true,
      title:'HOME',
    }
  },
  {
    path: "/users",
    name: "Users",
    component: UsersView,
    meta:{
      icon:'mdi-account-group ',
      visible:true,
      title:'USERS',
    }
  },

{
  path: "statics",
  name: "Statics",
  component: StaticsView,
  meta:{
    icon:'mdi-chart-scatter-plot-hexbin', 
    visible:true,
    title:'STATICS', 
   
  }
},
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
