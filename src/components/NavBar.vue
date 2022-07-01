<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <div class="container">
      <b-navbar-brand>Cursos AlfaWeb</b-navbar-brand>

      <b-navbar-toggle
        v-if="activeLogin"
        target="nav-collapse"
      ></b-navbar-toggle>

      <b-collapse v-if="activeLogin" id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <router-link class="nav-link" to="/cursos">Cursos</router-link>
          <router-link class="nav-link" to="/administracion"
            >Administracion</router-link
          >

          <b-nav-item-dropdown :text="correo" right>
            <b-dropdown-item @click="cerrarSesion"
              >Cerrar sesion</b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("session", ["signOut"]),
    async cerrarSesion() {
      await this.signOut(), this.$router.push(`/login`);
    },
  },
  computed: {
    ...mapGetters("session", ["activeLogin", "correo"]),
  },
};
</script>

<style></style>
