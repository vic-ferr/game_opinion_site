import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/opinion",
    name: "opinionesView",
    component: () => import("../views/OpinionesView.vue"),
  },
  {
    path: "/administracion",
    name: "administracion",
    component: () =>
      import(
        /* webpackChunkName: "administracion" */ "../views/AdministracionView.vue"
      ),
  },
  {
    path: "/editando/:id",
    name: "Editando",
    component: () =>
      import(/* webpackChunkName: "Editando" */ "../views/EditarOpinion.vue"),
  },
  {
    path: "*",
    name: "NoPage",
    component: () => import("../views/NoPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
