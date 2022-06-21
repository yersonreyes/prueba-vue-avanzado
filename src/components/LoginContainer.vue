<template>
  <div class="container mt-5">
    <b-form @submit="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Correo electronico:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Ingresa tu email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Contraseña" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          placeholder="Ingresa tu contraseña"
          required
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Ingresar</b-button>
      <b-button @click="crearUsuario" class="ml-3" type="button" variant="info"
        >Crear Cuenta</b-button
      >
    </b-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions("session", [
      "signInWithEmailAndPassword",
      "createUserWithEmailAndPassword",
    ]),
    async onSubmit(event) {
      event.preventDefault();
      await this.signInWithEmailAndPassword(this.form);
      this.$router.push(`/`);
    },

    async crearUsuario() {
      await this.createUserWithEmailAndPassword(this.form);
      await this.signInWithEmailAndPassword(this.form);
      this.$router.push(`/`);
    },
  },
};
</script>
