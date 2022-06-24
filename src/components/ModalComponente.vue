<template>
  <b-modal id="modal-1" title="Agregar nuevo curso">
    <div>
      <b-form-input
        v-model="form.curso"
        placeholder="Nombre del curso"
      ></b-form-input>
      <b-form-input
        class="mt-2"
        type="number"
        v-model="form.cupos"
        placeholder="Cupos"
      ></b-form-input>
      <div class="mt-2">Value: {{ form }}</div>
    </div>
  </b-modal>
</template>

<script>
export default {
  data() {
    return {
      form: {
        curso: "",
        cupos: "",
        inscritos: "",
        duracion: "",
        costo: "",
        terminado: "",
        fecha: "",
      },
    };
  },
};
</script>

<style></style>
