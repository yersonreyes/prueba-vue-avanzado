import Firebase from "firebase";

export const cursosModule = {
  namespaced: true,
  state: {
    cursos: null,
    doc: null,
    loading: false,
  },

  getters: {
    cantidadCursos(state) {
      return state.cursos.length;
    },
    totalAlumnos(state) {
      return state.cursos.reduce((accumulator, curso) => {
        accumulator += parseInt(curso.cupos);
        return accumulator;
      }, 0);
    },

    totalInscritos(state) {
      return state.cursos.reduce((accumulator, curso) => {
        accumulator += parseInt(curso.inscritos);
        return accumulator;
      }, 0);
    },

    totalAlumnosRstantes(state, getters) {
      return getters.totalAlumnos - getters.totalInscritos;
    },

    totalCursosTerminados(state) {
      return state.cursos.reduce((accumulator, curso) => {
        if (curso.terminado === "true") accumulator++;
        return accumulator;
      }, 0);
    },

    totalCursosActivos(state) {
      return state.cursos.reduce((accumulator, curso) => {
        if (curso.terminado === "false") accumulator++;
        return accumulator;
      }, 0);
    },
  },

  mutations: {
    SET_CURSOS(state, newCurso) {
      state.cursos = newCurso;
    },
    SET_CURSO(state, newCurso) {
      state.doc = newCurso;
    },
    SET_LOADING(state, newLoading) {
      state.loading = newLoading;
    },
  },

  actions: {
    async getAll({ commit }) {
      commit("SET_LOADING", true);
      try {
        const cursos = [];
        const cursosCollection = await Firebase.firestore()
          .collection("cursos")
          .get();

        cursosCollection.forEach((doc) => {
          cursos.push({ ...doc.data(), id: doc.id });
        });

        commit("SET_CURSOS", cursos);
      } catch (e) {
        console.error("Error al traer Usuarios de Firebase", e);
      } finally {
        commit("SET_LOADING", false);
      }
    },

    async getCurso({ commit }, curso) {
      commit("SET_LOADING", true);
      try {
        const doc = await Firebase.firestore()
          .collection("cursos")
          .doc(curso)
          .get();

        commit("SET_CURSO", doc.data());
      } catch (e) {
        console.error("Error al traer Usuarios de Firebase", e);
      } finally {
        commit("SET_LOADING", false);
      }
    },

    async postCurso({ commit }, curso) {
      commit("SET_LOADING", true);
      try {
        const UsersCollection = await Firebase.firestore()
          .collection("cursos")
          .doc()
          .set(curso);

        console.log(UsersCollection);
      } catch (e) {
        console.error("Error al traer Usuarios de Firebase", e);
      } finally {
        commit("SET_LOADING", false);
      }
    },

    async updateCurso({ commit }, curso) {
      commit("SET_LOADING", true);
      try {
        await Firebase.firestore()
          .collection("cursos")
          .doc(curso.id)
          .update(curso.data);
      } catch (e) {
        console.error("Error al traer Usuarios de Firebase", e);
      } finally {
        commit("SET_LOADING", false);
      }
    },

    async removeOneById({ commit }, id) {
      commit("SET_LOADING", true);
      try {
        await Firebase.firestore().collection("cursos").doc(id).delete();
      } catch (e) {
        console.error("Error al borrar documento: ", id);
      } finally {
        commit("SET_LOADING", false);
      }
    },
  },
};
