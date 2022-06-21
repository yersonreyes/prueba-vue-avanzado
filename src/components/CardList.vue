<template>
  <div class="col">
    <b-card
      :title="titulo"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
      <b-list-group flush>
        <b-list-group-item
          >Costo <br />
          Duracion
        </b-list-group-item>
        <b-list-group-item
          >Cupos <br />
          Completado
        </b-list-group-item>
        <b-list-group-item
          >Fecha de registro <br />
          06/03/2021
        </b-list-group-item>

        <b-list-group-item
          >Descripcion <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam,
          suscipit?
        </b-list-group-item>
      </b-list-group>
    </b-card>
  </div>
</template>

<script>
export default {
  props: ["imagen", "titulo", "informacion"],
};
</script>

<style></style>
