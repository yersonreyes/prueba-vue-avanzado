<template>
  <div class="container">
    <b-button v-b-modal.modal-1 class="mt-5" variant="primary"
      >Agregar Curso</b-button
    >
    <ModalComponente />
    <table class="table mt-5">
      <thead>
        <tr>
          <th scope="col">Curso</th>
          <th scope="col">Cupos</th>
          <th scope="col">Inscritos</th>
          <th scope="col">Duracion</th>
          <th scope="col">Costo</th>
          <th scope="col">Terminado</th>
          <th scope="col">Fecha</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <TableComponente
          v-for="item in cursos"
          :key="item.id"
          :curso="item.curso"
          :cupos="item.cupos"
          :inscritos="item.inscritos"
          :duracion="item.duracion"
          :costo="item.costo"
          :terminado="item.terminado"
          :fecha="item.fecha"
          :id="item.id"
          :descripcion="item.descripcion"
          :url="item.url"
        />
      </tbody>
    </table>
    <b-alert show variant="primary"> cantidad de alumnos inscritos</b-alert>
    <b-alert show variant="primary">
      cantidad de cursos: {{ cursos.length }}
    </b-alert>
  </div>
</template>

<script>
import ModalComponente from "@/components/ModalComponente.vue";
import TableComponente from "@/components/TableComponente.vue";

import { mapState, mapActions } from "vuex";
export default {
  components: {
    ModalComponente,
    TableComponente,
  },
  computed: {
    ...mapState("cursos", ["cursos"]),
  },

  methods: {
    ...mapActions("cursos", {
      getAllCursos: "getAll",
    }),
  },

  created() {
    this.getAllCursos();
  },
};
</script>

<style></style>
