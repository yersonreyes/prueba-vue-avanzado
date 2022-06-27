<template>
  <tr>
    <td>{{ curso }}</td>
    <td>{{ cupos }}</td>
    <td>{{ inscritos }}</td>
    <td>{{ duracion }}</td>
    <td>
      <span class="badge badge-success">${{ costo }}</span>
    </td>
    <td>
      <span
        :class="terminado === 'true' ? 'badge-primary' : 'badge-secondary'"
        class="badge"
        >{{ terminado === "true" ? "Si" : "No" }}</span
      >
    </td>
    <td>
      <span class="badge badge-success">{{ fecha }}</span>
    </td>
    <td class="d-flex">
      <button @click="editarCurso()" class="btn btn-primary">
        <b-icon icon="pencil-fill" font-scale="0.9"></b-icon>
      </button>
      <button @click="eleiminarCurso()" class="ml-2 btn btn-danger">
        <b-icon icon="trash-fill" font-scale="0.9"></b-icon>
      </button>
    </td>
  </tr>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: [
    "curso",
    "cupos",
    "inscritos",
    "duracion",
    "costo",
    "terminado",
    "fecha",
    "id",
  ],

  methods: {
    ...mapActions("cursos", ["removeOneById", "getAll"]),
    async eleiminarCurso() {
      try {
        await this.removeOneById(this.id);
        await this.getAll();
      } catch (e) {
        console.log(e);
      }
    },

    editarCurso() {
      this.$router.push(`/administracion/${this.id}`);
    },
  },
};
</script>

<style></style>
