import Vue from "vue";

import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import PedidosList from '../components/Pedidos/List'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/pedidos",
    name: "PedidosList",
    component: PedidosList
  }
];

const router = new VueRouter({
  mode: "history",
  base: 'http://localhost:8765/',
  routes
});

export default router;
