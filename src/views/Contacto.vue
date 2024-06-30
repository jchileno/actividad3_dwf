<template>
  <form-contacto></form-contacto>
</template>

<script setup>
import FormContacto from '@/components/FormContacto.vue'
const titulo ="Formulario de Contacto"
const colorTitulo = "color:#ff7b00";
</script>

<style>
textarea{
  height: 120px;
}
.titulo{
  text-align: center;
  padding: 30px 0px 10px 0px;
}
</style>