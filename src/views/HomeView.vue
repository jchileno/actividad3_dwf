<template>
  <slider-inicio></slider-inicio>
  <cuerpo-inicio-vue></cuerpo-inicio-vue>
</template>

<script>
import SliderInicio from '@/components/SliderInicio.vue';
import CuerpoInicioVue from '@/components/CuerpoInicio.vue';
export default {
  name: 'HomeView',
  components: { SliderInicio, CuerpoInicioVue }
}
</script>

<style></style>
