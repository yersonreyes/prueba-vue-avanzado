import Vue from "vue";
import Vuex from "vuex";

import { sessionModule as session } from "./modules/sessionModule.js";
import { cursosModule as cursos } from "./modules/cursosModule.js";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    session,
    cursos,
  },
});
