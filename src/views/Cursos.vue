<template>
  <div class="container">
    <h1 class="text-center mt-5">Lista de cursos</h1>
    <div class="row mt-5">
      <CardList imagen="" titulo="JavaScript" informacion="" />
      <CardList imagen="" titulo="JavaScript" informacion="" />
    </div>
  </div>
</template>

<script>
import CardList from "@/components/CardList.vue";
export default {
  components: { CardList },
};
</script>

<style></style>
