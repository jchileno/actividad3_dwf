<template>
  <footer class="bg-light text-center text-lg-start mt-auto">
    <div class="container footeruno">
      <div class="row">
        <!-- Primera Columna -->
        <div class="col-lg-3 col-md-6 mb-4">
          <img src="@/assets/logopieok.png" alt="Logo">
        </div>
        <!-- Segunda Columna -->
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0 mb-md-0">
          <h5 class="posiciontop"><b>Síguenos en</b></h5>
          <ul class="list-unstyled d-flex justify-content-lg-start justify-content-center">
            <li class="mx-2">
              <a href="https://www.facebook.com/p/Estudio-Jur%C3%ADdico-C%C3%B3rdova-Pintado-Leyva-Asociados-100063661444337/?_rdr" class="text-dark" target="_blank">
                <i class="fab fa-facebook fa-3x"></i>
              </a>
            </li>            
            <li class="mx-2">
              <a href="#" class="text-dark">
                <i class="fab fa-instagram fa-3x"></i>
              </a>
            </li>
            <li class="mx-2">
              <a href="https://www.youtube.com/@aristidescordova8437" class="text-dark" target="_blank">
                <i class="fab fa-youtube fa-3x"></i>
              </a>
            </li>
          </ul>
        </div><hr>
        <!-- Tercera Columna -->
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="posiciontop"><b>Especialidades</b></h5>
          <ul class="list-unstyled">
            <li><router-link class="nav-link" to="/derechopenal">Derecho Penal</router-link></li>
            <li><router-link class="nav-link" to="/derechocivil">Derecho Civil</router-link></li>
          </ul>
        </div><hr>
        <!-- Cuarta Columna -->
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="posiciontop"><b>Contáctanos</b></h5>
          <ul class="list-unstyled">
            <li>
            <i class="fas fa-phone fa-1x"></i>
              Fijo: 6079495<br>
              Movistar: 996715720 Claro: 984796362
            </li>
            <li>
              <i class="fas fa-envelope fa-1x"></i>
              ejcordovapintado@hotmail.com</li>
            <li>
              <i class="fas fa-map-marker-alt"></i>
              Calle Los Progresistas mz. ZZ-4 lote 15<br>
              Urb. Pro - Los Olivos
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footerdos">
      <div class="">
        <div class="col text-center">
          &copy; 2024 Estudio Jurídico Córdova Pintado Leyva &amp; Asociados
        </div>
      </div>
    </div>
  </footer>
</template>

<script>

export default {

}
</script>

<style scoped>
.nav-link:hover{
    background-color: #F8F9FA;
    color: black;
}
footer{
    color: black;
}
.footeruno{
    padding: 40px 0px;
}
.footerdos{
    padding: 15px 20px;
    background-color: black;
    color: white;
}
hr{
    display: none;
    width: 70%;
    margin: auto;
    padding: 0px;
}
.posiciontop{
    padding-top: 30px;
}
/* Estilos adicionales para centrar la imagen en móviles */
@media (max-width: 767.98px) {
    .justify-content-lg-start {
        justify-content: center !important;
    }
    hr{
        display: block;
    }
}
</style>