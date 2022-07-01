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
    <b-alert show variant="success">
      <b-icon icon="people-fill" scale="2" variant="success"></b-icon>
      <span class="ml-3">
        cantidad total de alumnos permitidos: {{ totalAlumnos }}</span
      >
    </b-alert>
    <b-alert show variant="primary">
      <b-icon icon="person-check-fill" scale="2" variant="primary"></b-icon>
      <span class="ml-3">
        cantidad de alumnos inscritos: {{ totalInscritos }}</span
      >
    </b-alert>
    <b-alert show variant="warning">
      <b-icon icon="person-x-fill" scale="2" variant="warning"></b-icon>
      <span class="ml-3">
        cantidad total de cupos restantes {{ totalAlumnosRstantes }}</span
      >
    </b-alert>
    <b-alert show variant="danger">
      <b-icon icon="x-circle" scale="2" variant="danger"></b-icon>
      <span class="ml-3"
        >cantidad de cursos terminados: {{ totalCursosTerminados }}</span
      >
    </b-alert>
    <b-alert show variant="info">
      <b-icon icon="collection-fill" scale="2" variant="info"></b-icon>
      <span class="ml-3">
        cantidad total de cursos activos: {{ totalCursosActivos }}</span
      >
    </b-alert>

    <b-alert show variant="danger">
      <b-icon icon="collection-fill" scale="2" variant="danger"></b-icon>
      <span class="ml-3"> cantidad total de cursos: {{ cantidadCursos }}</span>
    </b-alert>
  </div>
</template>

<script>
import ModalComponente from "@/components/ModalComponente.vue";
import TableComponente from "@/components/TableComponente.vue";

import { mapState, mapActions, mapGetters } from "vuex";
export default {
  components: {
    ModalComponente,
    TableComponente,
  },
  computed: {
    ...mapState("cursos", ["cursos"]),
    ...mapGetters("cursos", [
      "cantidadCursos",
      "totalAlumnos",
      "totalInscritos",
      "totalAlumnosRstantes",
      "totalCursosTerminados",
      "totalCursosActivos",
    ]),
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
