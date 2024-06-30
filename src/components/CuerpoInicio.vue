<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6 d-flex">
        <div class="contenidohome">
          <h2 class="titulohome">Estudio Jurídico</h2>
          <div class="parrafohome">
            <p>
            Nuestro Estudio de Abogados se especializa en la defensa de causas penales y civiles. Atendemos toda la problemática que presentan las personas que acuden a nuestro Estudio en busca de que se reconozcan sus derechos a una tutela jurisdiccional. Según el artículo 139, inciso 16, de la Constitución Política, el Estado garantiza a las personas el acceso a la justicia. Por ello, los profesionales del Derecho de nuestro Estudio nos hemos especializado en brindar un servicio adecuado y de calidad.
          </p>
          <p>
            En primer lugar, ofrecemos servicios de defensa penal y asesoría a nuestros clientes en delitos como falsificación de documentos, cohecho, robo, homicidio, usurpación y estafa genérica, entre otros. Estos aspectos penales constituyen la base principal de nuestro Estudio.
          </p>
          <p>
            En segundo lugar, también brindamos servicios de defensa civil. Atendemos a ciudadanos que buscan tutela jurisdiccional en temas como hipotecas, cartas notariales, reclamaciones de propiedades e interdictos de recobrar o retener. Además, manejamos asuntos colaterales incluidos en el Código Civil, como el derecho a un nombre, domicilio y reclamaciones de herencias, entre otros. Esta es la esencia y la gama de servicios que ofrece nuestro Estudio.
          </p>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <img src="../assets/staff.jpg" class="img-fluid imghome" alt="Imagen home">
      </div>
    </div>
  </div>
  <br>
  <div class="container my-4">
    <h2 class="text-center">Areas de Especialización</h2><br>
    <div class="row">
      <div class="col-md-6 mb-4">
        <div class="image-overlay">
          <router-link class="nav-link" to="/derechopenal">
            <img src="../assets/dp.jpg" alt="Imagen 1">
            <div class="overlay-text">
              <h1>Derecho Penal</h1>
            </div>
          </router-link>
        </div>
      </div>
      <div class="col-md-6 mb-4">
        <div class="image-overlay">
          <router-link class="nav-link" to="/derechocivil">
            <img src="../assets/dc.jpg" alt="Imagen 2">
            <div class="overlay-text">
              <h1>Derecho Civil</h1>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.titulohome{
    text-align: left;
    padding-bottom: 15px;
  }
  .parrafohome{
    text-align: justify;
  }
  .imghome{
    border-radius: 5px;
  }
  /* Estilos adicionales para centrar la imagen en móviles */
  @media (max-width: 767.98px) {
    .imghome{
      display: flex;
    }
  }
  .image-overlay {
    position: relative;
    width: 100%;
    border-radius: 10px;
  }
  .image-overlay img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    transition: filter 0.3s ease-in-out;
  }
  .image-overlay .overlay-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
    transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
    border-radius: 10px;
  }

  .image-overlay:hover img {
    filter: brightness(50%);
    border-radius: 10px;
  }

  .image-overlay:hover .overlay-text {
    color: #ffffff;
    transform: translate(-50%, -50%) scale(1.1);
    border-radius: 10px;
  }
</style>