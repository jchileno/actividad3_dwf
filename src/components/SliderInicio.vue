<template>
  <div class="banner">
    <div class="banner-container">
      <img src="../assets/cab1.jpg" class="banner-image" alt="Banner">
      <div class="centered-content2">
        <h1>Estudio Jurídico</h1>
        <h4>Córdova Pintado Leyva &amp; Asociados</h4>
        <a href="#" class="btn btn-lg btn-outline-light mt-3">Agenda tu cita</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
  .banner{
    padding: 0px;
  }
  .banner-container {
    position: relative;
    text-align: center;
    color: white;
    width: 100%;
    overflow: hidden;
  }
  .banner-image {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
  .centered-content2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  /* Estilos adicionales para centrar la imagen en móviles */
  @media (max-width: 767.98px) {
    .banner-container {
      height: 490px;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
    }
    .banner-image {
      width: auto;
      height: 100%;
      max-width: none;
      object-fit: cover;
      object-position: center;
    }
  }
</style>