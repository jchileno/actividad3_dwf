<template>
  <div class="banner">
    <div class="banner-container">
      <img src="../assets/cab8.jpg" class="banner-image" alt="Banner">
      <div class="centered-content2">
        <h1>Contáctenos</h1>
        <h5>Completa el formulario y pronto estaremos atendiendo tu solicitud</h5>
      </div>
    </div>
  </div>
  <div class="titulo">
    <h1 v-bind:style="colorTitulo">{{ titulo }}</h1>
  </div>
  <div class="container mt-5">
    <form>
      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="nombre" placeholder="Nombre">
        <label for="nombre">Nombre</label>
      </div>
      <div class="form-floating mb-3">
        <input type="email" id="email" class="form-control" placeholder="Correo Electrónico">
        <label for="email">Correo Electrónico</label>
      </div>
      <div class="form-floating mb-3">
        <input type="tel" id="telefono" class="form-control" placeholder="Teléfono">
        <label for="telefono">Teléfono</label>
      </div>
      <div class="form-floating mb-3">
        <textarea class="form-control" placeholder="Mensaje" id="mensaje"></textarea>
        <label for="mensaje">Mensaje</label>
      </div>
      <div class="mb-3">
        <button type="submit" class="btn btn-primary"> ENVIAR </button>
      </div>
    </form>
  </div>
</template>

<script setup>
const titulo ="Formulario de Contacto"
const colorTitulo = "color:#ff7b00";
</script>

<style>

</style>