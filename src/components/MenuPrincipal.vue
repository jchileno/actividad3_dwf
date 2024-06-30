<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light">
      <router-link class="navbar-brand" to="/inicio">
        <img src="@/assets/logo.jpg" alt="Logo">
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item" v-bind:class="{ active: isActive('/inicio') }">
            <router-link class="nav-link" to="/inicio">Inicio</router-link>
          </li>
          <li class="nav-item" v-bind:class="{ active: isActive('/nosotros') }">
            <router-link class="nav-link" to="/nosotros">Nosotros</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Especialidades
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li v-bind:class="{ active: isDropdownActive('/especialidades') }"><router-link class="dropdown-item" to="/derechocivil">Derecho Civil</router-link></li>
              <li v-bind:class="{ active: isDropdownActive('/especialidades') }"><router-link class="dropdown-item" to="/derechopenal">Derecho Penal</router-link></li>
            </ul>
          </li>
          <li class="nav-item" v-bind:class="{ active: isActive('/clientes') }">
            <router-link class="nav-link" to="/clientes">Clientes</router-link>
          </li>
          <li class="nav-item" v-bind:class="{ active: isActive('/galeria') }">
            <router-link class="nav-link" to="/galeria">Galería</router-link>
          </li>
          <li class="nav-item" v-bind:class="{ active: isActive('/consultasonline') }">
            <router-link class="nav-link" to="/consultasonline">Consultas en Línea</router-link>
          </li>
          <li class="nav-item" v-bind:class="{ active: isActive('/contacto') }">
            <router-link class="nav-link" to="/contacto">Contacto</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
    <br><br>
  </div>
</template>
  
<script>
  export default {
      methods: {
      isActive(path) {
        return this.$route.path === path;
      },
      isDropdownActive(paths) {
        return paths.includes(this.$route.path);
      }
    }
  }
</script>
  
<style scoped>
  nav {
    padding: 10px 0px;
  }
  nav a {
    color: #000000;
    border-radius: 5px;
  }
  nav a.router-link-exact-active {
    color: #ff7b00;
  }
  .nav-link:hover{
    background-color: #ff7b00;
    border-radius: 5px;
    color: white !important;
  }
  .dropdown-item:hover{
    background-color: rgb(209, 209, 209);
  }
  @media (max-width: 990px) {
    .navbar-collapse {
      justify-content: center !important; /* Centra los enlaces en versión móvil */
      text-align: center;
    }
  }
</style>