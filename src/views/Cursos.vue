<template>
  <div class="container">
    <h1 class="text-center mt-5">Lista de cursos</h1>
    <div class="row mt-5">
      <CardList
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
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import CardList from "@/components/CardList.vue";
export default {
  components: { CardList },
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
