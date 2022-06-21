import Firebase from "firebase";
export const sessionModule = {
  namespaced: true,
  state: {
    user: null,
    loading: false,
  },
  getters: {
    activeLogin(state) {
      return !!state.user;
    },

    correo(state) {
      return state.user.user.email;
    },
  },
  mutations: {
    SET_USER(state, newUser) {
      state.user = newUser;
    },
    SET_LOADING(state, newLoading) {
      state.loading = newLoading;
    },
  },
  actions: {
    async signInWithEmailAndPassword({ commit }, credentials) {
      commit("SET_LOADING", true);
      try {
        const user = await Firebase.auth().signInWithEmailAndPassword(
          credentials.email,
          credentials.password
        );
        commit("SET_USER", user);
      } catch (e) {
        console.error("La mansa embarraita", e);
      } finally {
        commit("SET_LOADING", false);
      }
    },

    async createUserWithEmailAndPassword({ commit }, newUser) {
      commit("SET_LOADING", true);

      try {
        await Firebase.auth().createUserWithEmailAndPassword(
          newUser.email,
          newUser.password
        );
      } catch (error) {
        console.error(error);
      } finally {
        commit("SET_LOADING", false);
      }
    },

    async signOut({ commit }) {
      commit("SET_LOADING", true);
      try {
        await Firebase.auth().signOut();
        commit("SET_USER", false);
      } catch (e) {
        console.error("otra embarraita mas, me perd0n as¿", e);
      } finally {
        commit("SET_LOADING", false);
      }
    },
  },
};
