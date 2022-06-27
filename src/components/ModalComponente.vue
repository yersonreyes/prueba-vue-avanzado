<template>
  <b-modal hide-footer id="modal-1" title="Agregar nuevo curso">
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
      <b-form-input
        class="mt-2"
        type="number"
        v-model="form.inscritos"
        placeholder="Inscritos"
      ></b-form-input>
      <b-form-input
        class="mt-2"
        type="text"
        v-model="form.duracion"
        placeholder="Duracion del curso"
      ></b-form-input>
      <b-form-input
        class="mt-2"
        type="text"
        v-model="form.costo"
        placeholder="Valor"
      ></b-form-input>
      <b-form-input
        class="mt-2"
        type="date"
        v-model="form.fecha"
        placeholder="Fecha"
      ></b-form-input>
      <b-form-input
        class="mt-2"
        type="text"
        v-model="form.descripcion"
        placeholder="descripcion"
      ></b-form-input>
      <b-form-input
        class="mt-2"
        type="text"
        v-model="form.url"
        placeholder="url"
      ></b-form-input>
      <b-form-group label="Curso terminado" v-slot="{ ariaDescribedby }">
        <b-form-radio
          v-model="form.terminado"
          :aria-describedby="ariaDescribedby"
          name="some-radios"
          value="true"
          >Si</b-form-radio
        >
        <b-form-radio
          v-model="form.terminado"
          :aria-describedby="ariaDescribedby"
          name="some-radios"
          value="false"
          >No</b-form-radio
        >
      </b-form-group>
    </div>

    <button class="mt-2 btn btn-primary" @click="guardarCurso">
      Agregar Curso
    </button>
  </b-modal>
</template>

<script>
import { mapActions } from "vuex";
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
        descripcion: "",
        url: "",
      },
    };
  },

  methods: {
    ...mapActions("cursos", ["postCurso", "getAll"]),
    async guardarCurso() {
      try {
        await this.postCurso(this.form);
        await this.getAll();
      } catch (e) {
        console.log(e);
      } finally {
        this.$bvModal.hide("modal-1");
      }
    },
  },
};
</script>

<style></style>
