import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Usuario from "../views/Usuario.vue";
import Cursos from "../views/Cursos.vue";
import Administracion from "../views/Administracion.vue";

import Store from "@/store/";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      accessLevel: "private",
    },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      accessLevel: "public",
    },
  },
  {
    path: "/usuario",
    name: "usuario",
    component: Usuario,
    meta: {
      accessLevel: "private",
    },
  },
  {
    path: "/cursos",
    name: "cursos",
    component: Cursos,
    meta: {
      accessLevel: "private",
    },
  },
  {
    path: "/administracion",
    name: "administracion",
    component: Administracion,
    meta: {
      accessLevel: "private",
    },
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  const accessLevel = to.meta.accessLevel;
  const activeLogin = Store.getters["session/activeLogin"];

  if (accessLevel === "public") {
    next();
  } else if (accessLevel === "private") {
    if (activeLogin) {
      next();
    } else {
      next("/login");
    }
  }
});
export default router;
