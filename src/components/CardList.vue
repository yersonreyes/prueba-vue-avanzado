<template>
  <div class="col">
    <b-card
      :title="curso"
      :img-src="url"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
      <b-list-group flush>
        <b-list-group-item
          >Costo: {{ costo }} <br />
          Duracion: {{ duracion }}
        </b-list-group-item>
        <b-list-group-item
          >Cupos:{{ cupos }} <br />
          Completado {{ terminado === "true" ? "Si" : "No" }}
        </b-list-group-item>
        <b-list-group-item
          >Fecha de registro <br />
          {{ fecha }}
        </b-list-group-item>

        <b-list-group-item
          >Descripcion <br />
          {{ descripcion }}
        </b-list-group-item>
      </b-list-group>
    </b-card>
  </div>
</template>

<script>
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
    "url",
    "descripcion",
  ],
};
</script>

<style></style>
