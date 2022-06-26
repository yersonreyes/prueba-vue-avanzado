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
      <span class="badge badge-secondary">{{ terminado }}</span>
    </td>
    <td>
      <span class="badge badge-success">{{ fecha }}</span>
    </td>
    <td class="d-flex">
      <button class="btn btn-primary">
        <b-icon icon="pencil-fill" font-scale="0.9"></b-icon>
      </button>
      <button class="ml-2 btn btn-danger">
        <b-icon
          @click="eleiminarCurso()"
          icon="trash-fill"
          font-scale="0.9"
        ></b-icon>
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
  },
};
</script>

<style></style>
