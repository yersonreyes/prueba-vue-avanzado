import Firebase from "firebase";

export const cursosModule = {
  namespaced: true,
  state: {
    cursos: null,
    loading: false,
  },

  mutations: {
    SET_CURSOS(state, newCurso) {
      state.cursos = newCurso;
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
  },
};