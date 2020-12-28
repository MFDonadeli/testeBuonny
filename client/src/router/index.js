import Vue from "vue";

import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import PedidosList from '../components/Pedidos/List'
import PedidosCreate from '../components/Pedidos/Create'
import PedidosView from '../components/Pedidos/View'
import PedidosEdit from '../components/Pedidos/Edit'

import PedidoItemEdit from '../components/PedidoItem/Edit'

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
  },
  {
    path: '/pedidos/novo',
    name: 'PedidosCreate',
    component: PedidosCreate
  },
  {
    path: '/pedidos/:id',
    name: 'PedidosView',
    component: PedidosView
  },
  {
    path: '/pedidos/:id/editar',
    name: 'PedidosEdit',
    component: PedidosEdit
  },
  {
    path: '/pedidoitem/:idpedido/novo',
    name: 'PedidoItemEdit',
    component: PedidoItemEdit
  },
  {
    path: '/pedidoitem/:idpedido/editar/:iditem',
    name: 'PedidoItemEdit',
    component: PedidoItemEdit
  }
];

const router = new VueRouter({
  mode: "history",
  base: '',
  routes
});

export default router;
