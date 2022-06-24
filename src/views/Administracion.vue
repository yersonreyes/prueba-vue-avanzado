<template>
  <div class="container">
    <b-button v-b-modal.modal-1 class="mt-5" variant="primary"
      >Agregar Curso</b-button
    >
    <ModalComponente />
    <ul id="example-1">
      <li v-for="curso in cursos" :key="curso.id">
        {{ curso.id }}
      </li>
    </ul>
  </div>
</template>

<script>
import ModalComponente from "@/components/ModalComponente.vue";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    ModalComponente,
  },
  computed: {
    ...mapState("cursos", {
      cursos: (state) => state.cursos,
      loading: (state) => state.loading,
    }),
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
