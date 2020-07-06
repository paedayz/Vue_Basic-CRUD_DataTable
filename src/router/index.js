import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Data_table from "../views/DataTable.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/DataTable",
    name: "DataTable",
    component: Data_table,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
